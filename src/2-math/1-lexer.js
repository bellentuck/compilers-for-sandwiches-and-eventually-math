'use strict'

// regular expressions which may be helpful
const matchers = [
	{ type: 'Number', regex: /^\d+/ },
	{ type: 'LParen', regex: /^\(/ },
	{ type: 'RParen', regex: /^\)/ },
	{ type: 'Star', regex: /^\*/ },
	{ type: 'Slash', regex: /^\// },
	{ type: 'Plus', regex: /^\+/ },
	{ type: 'Minus', regex: /^-/ },
	{ type: 'Space', regex: /^\s+/ },
]

// Read: `lex` is a function taking a String and returning an Array of Tokens
// (for our purposes, a Token is just an object with `.type` property)

// lex :: String -> [Token]
const lex = inputStr => {
	// Your job: implement this function
	// // example use of the matcher objects above:
	// const matcher = matchers.find(aMatcher => aMatcher.regex.test(inputStr))
	// const matched = matcher.regex.exec(inputStr)[0]
}

// This makes `lex` available to other JS files in Node
module.exports = {
	lex,
}
