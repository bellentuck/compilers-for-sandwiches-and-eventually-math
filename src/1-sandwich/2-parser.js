'use strict'

// All the sub-parsers take an Array of Tokens, and return a tuple of
// (a token or parse tree) and (the tokens which the parser did not consume).

// You get some of this parser for "free" (as a model for how this works).
// parseBread :: [Token] -> { parseTree: ParseTree, remainingTokens: [Token] }
const parseBread = tokens => {
	const next = tokens[0]
	// Bread -> 'rye'
	// Bread -> 'wheat'
	if (next.value === 'rye' || next.value === 'wheat') {
		return {
			parseTree: undefined, // finish me!
			remainingTokens: undefined, // finish me!
		}
	}
	// otherwise, we have a bad string!
	throw Error(`Unexpected token: ${next.value}`)
}

// parseFilling :: [Token] -> { parseTree: ParseTree, remainingTokens: [Token] }
const parseFilling = tokens => {
	const next = tokens[0]
	// Filling -> 'ham'
	// Filling -> 'cheese'
	// Filling -> 'mustard'

	// finish me!

	// otherwise, we have a bad string!
	throw Error(`Unexpected token: ${next.value}`)
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
