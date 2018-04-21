'use strict'

const { inspect } = require('util')
const prettyString = val => inspect(val, false, null, true)

// prettier-ignore
// original :: ParseTree -> String
const original = node => {
	switch (node.type) {
		case 'Bread':        return undefined // finish me!
		case 'Filling':      return undefined // finish me!
		case 'Epsilon':      return undefined // finish me!
		case 'MoreFillings': return undefined // finish me!
		case 'Sandwich':     return undefined // finish me!
		default: break
	}
	// if we didn't handle a given case, something has gone wrong
	throw Error(`Compilation error, unexpected node: ${prettyString(node)}`)
}

// prettier-ignore
// Example: 'R(hcm)' = Rye + ham, cheese, mustard
// shorthand :: ParseTree -> String
const shorthand = node => {
	switch (node.type) {
		case 'Bread':        return undefined // finish me!
		case 'Filling':      return undefined // finish me!
		case 'Epsilon':      return undefined // finish me!
		case 'MoreFillings': return undefined // finish me!
		case 'Sandwich':     return undefined // finish me!
		default: break
	}
	// if we didn't handle a given case, something has gone wrong
	throw Error(`Compilation error, unexpected node: ${prettyString(node)}`)
}

module.exports = {
	original,
	shorthand,
}
