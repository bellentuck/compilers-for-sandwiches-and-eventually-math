'use strict'

// All the sub-parsers take an Array of Tokens, and return a tuple of
// (a token or parse tree) and (the tokens which the parser did not consume).

// You get some of this parser for "free" (as a model for how this works).
// parseBread :: [Token] -> { parseTree: ParseTree, remainingTokens: [Token] }
const parseBread = tokens => {
	const { value } = tokens[0]
	// Bread -> 'rye'
	// Bread -> 'wheat'
	if (value === 'rye' || value === 'wheat') {
		return {
			parseTree: {
				type: 'Bread',
				childLiteral: value,
			},
			remainingTokens: tokens.slice(1),
		}
	}
	// otherwise, we have a bad string!
	throw Error(`Unexpected token: ${value}`)
}

// parseFilling :: [Token] -> { parseTree: ParseTree, remainingTokens: [Token] }
const parseFilling = tokens => {
	const { value } = tokens[0]
	// Filling -> 'ham'
	// Filling -> 'cheese'
	// Filling -> 'mustard'
	if (value === 'ham' || value === 'cheese' || value === 'mustard') {
		return {
			parseTree: {
				type: 'Filling',
				childLiteral: value,
			},
			remainingTokens: tokens.slice(1),
		}
	}
	// otherwise, we have a bad string!
	throw Error(`Unexpected token: ${value}`)
}

// parseMoreFillings :: [Token] -> { parseTree: ParseTree, remainingTokens: [Token] }
const parseMoreFillings = tokens => {
	const next = tokens[0]
	// MoreFillings -> nothing
	if (!next || next.value !== 'and') {
		return {
			parseTree: {
				type: 'Epsilon',
			},
			remainingTokens: tokens,
		}
	}
	// else there are "and X..." fillings to parse!
	const filling = parseFilling(tokens.slice(1))
	const moreFillings = parseMoreFillings(filling.remainingTokens)
	return {
		parseTree: {
			type: 'MoreFillings',
			childFilling: filling.parseTree,
			childMoreFillings: moreFillings.parseTree,
		},
		remainingTokens: moreFillings.remainingTokens,
	}
}

// parseSandwich :: [Token] -> { parseTree: ParseTree, remainingTokens: [Token] }
const parseSandwich = tokens => {
	// Sandwich -> Filling MoreFillings 'on' Bread
	const filling = parseFilling(tokens)
	const moreFillings = parseMoreFillings(filling.remainingTokens)
	if (moreFillings.remainingTokens[0].value !== 'on') {
		throw Error('unexpected token')
	}
	const bread = parseBread(moreFillings.remainingTokens.slice(1)) // ignore 'on'
	return {
		parseTree: {
			type: 'Sandwich',
			childBread: bread.parseTree,
			childFilling: filling.parseTree,
			childMoreFillings: moreFillings.parseTree,
		},
		remainingTokens: bread.remainingTokens,
	}
}

// parse :: [Token] -> ParseTree (for a sandwich)
const parse = tokens => parseSandwich(tokens).parseTree

module.exports = {
	parseBread,
	parseFilling,
	parseMoreFillings,
	parseSandwich,
	parse,
}
