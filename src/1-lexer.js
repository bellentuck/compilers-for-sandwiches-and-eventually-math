'use strict'; // eslint-disable-line semi

// regular expressions which may be helpful
const matchers = [
	{ type: 'Number', regex: /^\d+/ },
	{ type: 'LParen', regex: /^\(/  },
	{ type: 'RParen', regex: /^\)/  },
	{ type: 'Star',   regex: /^\*/  },
	{ type: 'Slash',  regex: /^\//  },
	{ type: 'Plus',   regex: /^\+/  },
	{ type: 'Minus',  regex: /^-/   },
	{ type: 'Space',  regex: /^\s+/ },
]

// Read: `lex` is a function taking a String and returning an Array of Tokens
// (for our purposes, a Token is just an object with `.type` property)

// lex :: String -> [Token]
const lex = inputStr => {

	// Your job: implement this function

	const tokens = []

	if (!inputStr) return tokens

	const match = matchers.reduce((foundMatch, matcher) => {
		if (foundMatch) return foundMatch
		const newMatch = inputStr.match(matcher.regex)
		// const newMatch = matcher.regex.exec(inputStr)
		return newMatch
			? {
				type: matcher.type,
				value: newMatch[0],
			}
			: null
	}, null)

	if (!match) throw Error(`Unexpected token at: ${inputStr}`)

	if (match.type === 'Space') {
		return lex(inputStr.slice(match.value.length))
	}

	if (match) {
		tokens.push(match)
	}

	const nextTokens = lex(inputStr.slice(match.value.length))

	// return tokens.concat(nextTokens)
	return [match, ...nextTokens]

}

// This makes `lex` available to other JS files in Node
module.exports = {
	lex,
}
