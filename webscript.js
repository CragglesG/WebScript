import fs from 'fs';
import { Lexer } from './lexer.js'
import { Parser } from './parser.js'

const readFile = location =>
    new Promise((resolve, reject) =>
        fs.readFile(location, 'utf-8', (err, data) => {
            if (err) return reject(err)
            resolve(data.toString())
        })
    )

const writeFile = (location, data) =>
    new Promise((resolve, reject) =>
        fs.writeFile(location, data, err => {
        if (err) return reject(err)
        resolve()
        })
    )

;(async () => {
    let argv = process.argv.slice(2)
    const debug = argv.find(cmd => cmd === '--dbg') ? true : false
    argv = argv.filter(arg => arg !== '--dbg')

    const location = argv[0]

    if (location) {
        const program = await readFile(location)
    
        const lexer = new Lexer(program)
        try {
            lexer.scanTokens()
        } catch (err) {
            console.log(err)
            process.exit(1)
        } finally {
            if (debug) await writeFile('tokens.json', JSON.stringify(lexer.tokens, null, 2))
        }
    
        const parser = new Parser(lexer.tokens)
        try {
            parser.parse()
        } catch (err) {
            console.log(err)
        } finally {
            if (debug) await writeFile('ast.json', JSON.stringify(parser.ast, null, 2))
        }
    } else {
        // Interactive REPL time!
    } 
})()