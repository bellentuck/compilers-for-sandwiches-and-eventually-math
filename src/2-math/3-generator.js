'use strict'

const { inspect } = require('util')
const prettyString = val => inspect(val, false, null, true)

// prettier-ignore
// original :: ParseTree | Token -> String
const original = node => {
	switch (node.type) {
		case 'NumericF':         return undefined // implement me!
		case 'NegativeF':        return undefined // implement me!
		case 'GroupF':           return undefined // implement me!
		case 'MultiplicativeF2': return undefined // implement me!
		case 'DivisionalF2':     return undefined // implement me!
		case 'EpsilonF2':        return undefined // implement me!
		case 'AdditiveT2':       return undefined // implement me!
		case 'SubtractiveT2':    return undefined // implement me!
		case 'EpsilonT2':        return undefined // implement me!
		case 'Term':             return undefined // implement me!
		case 'Expression':       return undefined // implement me!
		default: break
	}
	// if we didn't handle a given case, something has gone wrong
	throw Error(`Compilation error, unexpected node: ${prettyString(node)}`)
}

// prettier-ignore
// evaluate :: ParseTree | Token -> Number
const evaluate = node => {
	switch (node.type) {
		case 'NumericF':         return undefined // implement me!
		case 'NegativeF':        return undefined // implement me!
		case 'GroupF':           return undefined // implement me!
		case 'MultiplicativeF2': return undefined // implement me!
		case 'DivisionalF2':     return undefined // implement me!
		case 'EpsilonF2':        return undefined // implement me!
		case 'AdditiveT2':       return undefined // implement me!
		case 'SubtractiveT2':    return undefined // implement me!
		case 'EpsilonT2':        return undefined // implement me!
		case 'Term':             return undefined // implement me!
		case 'Expression':       return undefined // implement me!
		default: break
	}
	// if we didn't handle a given case, something has gone wrong
	throw Error(`Compilation error, unexpected node: ${prettyString(node)}`)
}

// prettier-ignore
// rpn :: ParseTree | Token -> String
const rpn = node => {
	switch (node.type) {
		case 'NumericF':         return undefined // implement me!
		case 'NegativeF':        return undefined // implement me!
		case 'GroupF':           return undefined // implement me!
		case 'MultiplicativeF2': return undefined // implement me!
		case 'DivisionalF2':     return undefined // implement me!
		case 'EpsilonF2':        return undefined // implement me!
		case 'AdditiveT2':       return undefined // implement me!
		case 'SubtractiveT2':    return undefined // implement me!
		case 'EpsilonT2':        return undefined // implement me!
		case 'Term':             return undefined // implement me!
		case 'Expression':       return undefined // implement me!
		default: break
	}
	// if we didn't handle a given case, something has gone wrong
	throw Error(`Compilation error, unexpected node: ${prettyString(node)}`)
}

module.exports = {
	original,
	evaluate,
	rpn,
}
