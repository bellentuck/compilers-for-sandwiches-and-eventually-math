'use strict'

const { lex } = require('./1-lexer')
const { parse } = require('./2-parser')
const { generate } = require('./3-generator')

// receive sandwich string from input argument
const inputStr = process.argv[2]

// could import this e.g. from Ramda, but it's small enough to define inline.
const pipe = (...fns) => input => fns.reduce((data, fn) => fn(data), input)

// frontEnd :: String -> ParseTree
const frontEnd = pipe(lex, parse)

// backEnd :: ParseTree -> String
const backEnd = generate

// compile :: String -> String
const compile = pipe(frontEnd, backEnd)

// the only side effect in all of the solution code
const main = pipe(compile, console.log.bind(console))

// here we go…
main(inputStr)
