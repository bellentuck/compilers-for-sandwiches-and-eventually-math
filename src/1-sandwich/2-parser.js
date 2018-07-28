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

	// finish me!

	// MoreFillings -> 'and' Filling MoreFillings

	// finish me!
}

// parseSandwich :: [Token] -> { parseTree: ParseTree, remainingTokens: [Token] }
const parseSandwich = tokens => {
	// Sandwich -> Filling MoreFillings 'on' Bread
	// finish me!
}

// parse :: [Token] -> ParseTree (for a sandwich)
const parse = tokens => undefined // finish me!

module.exports = {
	parseBread,
	parseFilling,
	parseMoreFillings,
	parseSandwich,
	parse,
}
