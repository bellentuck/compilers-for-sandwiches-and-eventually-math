'use strict'

// All the sub-parsers take an Array of Tokens, and return a tuple of
// (a token or parse tree) and (the tokens which the parser did not consume).

// parseFactor :: [Token] -> { parseTree: ParseTree, remainingTokens: [Token] }
const parseFactor = tokens => {
	const next = tokens[0]

	// NumericF rule: Factor -> <number literal>
	if (next.type === 'Number') {
		// You get this one for "free", as a model for the others.
		return {
			parseTree: {
				type: 'NumericF',
				childNumber: next.value,
			},
			remainingTokens: tokens.slice(1),
		}
	}

	// NegativeF rule: Factor -> - Factor
	if (next.type === 'Minus') {
		// implement me!
		const factorResult = undefined
		return {
			parseTree: {
				type: 'NegativeF',
				childFactor: undefined, // implement me!
			},
			remainingTokens: undefined, // implement me!
		}
	}

	// GroupF rule: Factor -> (Expression)
	if (next.type === 'LParen') {
		// implement me (**at the end**, after `parseExpression`)
	}

	throw Error(`Parse error, unexpected token: ${next}`)
}

// parseF2 :: [Token] -> { parseTree: ParseTree, remainingTokens: [Token] }
const parseF2 = tokens => {
	const next = tokens[0]

	// F2 -> EpsilonF2

	// implement me!

	// MultiplicativeF2 rule: F2 -> * Factor F2
	// DivisionalF2 rule:     F2 -> / Factor F2

	// implement me!
}

// parseTerm :: [Token] -> { parseTree: ParseTree, remainingTokens: [Token] }
const parseTerm = tokens => {
	// Term -> Factor F2
	// implement me!
}

// parseT2 :: [Token] -> { parseTree: ParseTree, remainingTokens: [Token] }
const parseT2 = tokens => {
	const next = tokens[0]

	// T2 -> EpsilonT

	// implement me!

	// T2 -> + Term T2
	// T2 -> - Term T2

	// implement me!
}

// parseExpression :: [Token] -> { parseTree: ParseTree, remainingTokens: [Token] }
const parseExpression = tokens => {
	// Expression -> Term T2
	// implement me!
}

// parse :: [Token] -> ParseTree (for an expression)
const parse = tokens => parseExpression(tokens).parseTree // implement me!

module.exports = {
	parseFactor,
	parseF2,
	parseTerm,
	parseT2,
	parseExpression,
	parse,
}
