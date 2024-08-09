import { WebScriptError } from './stdlib.js'

// List of Keywords
export const KEYWORDS = {
        prepare: 'prepare',
        as: 'as', // Variables
        type: 'type',
        prep: 'prep',
        has: 'has', // Structs
        func: 'func',
        needs: 'needs',
        return: 'return', // Functions
        loop: 'loop',
        through: 'through',
        while: 'while', // Loops
        if: 'if',
        elif: 'elif',
        else: 'else', // Conditionals
}

//List of Tokens
export const TOKENS = {
    LeftParen: 'LeftParen',
    RightParen: 'RightParen',
    LeftBrace: 'LeftBrace',
    RightBrace: 'RightBrace',
    LeftBracket: 'LeftBracket',
    RightBracket: 'RightBracket',
    Period: 'Period',
    Comma: 'Comma', 
    Colon: 'Colon',
    Keyword: 'Keyword',
    Identifier: 'Identifier',
    String: 'String',
    Number: 'Number',
    Or: 'Or',
    Not: 'Not',
    And: 'And',
    Equiv: 'Equiv',
    NotEquiv: 'NotEquiv',
    Gt: 'Gt',
    Gte: 'Gte',
    Lt: 'Lt',
    Lte: 'Lte',
    Plus: 'Plus',
    Minus: 'Minus',
    Asterisk: 'Asterisk',
    Slash: 'Slash',
    EOF: 'EOF'
}

// Token class; contains all necessary information about a token
export class Token { 
    constructor(type, value, content, line, column) {
        this.type = type
        this.value = value
        this.content = content
        this.line = line 
        this.column = column 
    }

    toString() {
        return this.value
    }
}

// Lexer object; contains all methods and attributes in the Lexer
export class Lexer {
    constructor(program) {
        this.program = program
        this.tokens = []
        this.current = 0
        this.line = 1
        this.column = 0
    }

    error(msg) {
        throw new WebScriptError(`Error on ${this.line}:${this.column}: ${msg}`)
    }

    // Returns next character if not met by EOF
    peek() {
        if (this.current >= this.program.length) return '\0'
        return this.program[this.current] 
    }

    // Move to the next character
    advance() {
        if (this.current >= this.program.length) return '\0'
        this.column++
        return this.program[this.current++]
    }

    // Main token scanning function
    scanToken() {
        // Set char to the next character
        const char = this.advance()
        // Function to check if char is a number
        const isNumber = char => char >= '0' && char <= '9'
        // Function to check if char is a letter or underscore (for variables)
        const isChar = char =>
            (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || char === '_'
        // Function to check if char is a letter or number
        const isAlphanumeric = char => isNumber(char) || isChar(char)
        switch (char) {
            case '(': {
                return this.tokens.push(
                    new Token(TOKENS.LeftParen, '(', '(', this.line, this.column)
                )
            }
            case ')': {
                return this.tokens.push(
                    new Token(TOKENS.RightParen, ')', ')', this.line, this.column)
                )
            }
            case '{': {
                return this.tokens.push(
                    new Token(TOKENS.LeftBrace, '{', '{', this.line, this.column)
                )
            }
            case '}': {
                return this.tokens.push(
                    new Token(TOKENS.RightBrace, '}', '}', this.line, this.column)
                )
            }
            case '[': {
                return this.tokens.push(
                    new Token(TOKENS.LeftBracket, '[', '[', this.line, this.column)
                )
            }
            case ']': {
                return this.tokens.push(
                    new Token(TOKENS.RightBracket, ']', ']', this.line, this.column)
                )
            }
            case '.': {
                return this.tokens.push(
                    new Token(TOKENS.Period, '.', '.', this.line, this.column)
                )
            }
            case ',': {
                return this.tokens.push(
                    new Token(TOKENS.Comma, ',', ',', this.line, this.column)
                )
            }
            case ':': {
                return this.tokens.push(
                    new Token(TOKENS.Colon, ':', ':', this.line, this.column)
                )
            }
            case '+': {
                return this.tokens.push(
                    new Token(TOKENS.Plus, '+', '+', this.line, this.column)
                )
            }
            case '-': {
                return this.tokens.push(
                    new Token(TOKENS.Minus, '-', '-', this.line, this.column)
                )
            }
            case '*': {
                return this.tokens.push(
                    new Token(TOKENS.Asterisk, '*', '*', this.line, this.column)
                )
            }
            case '/': {
                // If there's a // then ignore the rest of the line, add TOKENS.Slash
                if (this.match('/')) {
                    while (this.peek() !== '\n' && this.peek() !== '\0') this.advance()
                    return
                }
                return this.tokens.push(
                    new Token(TOKENS.Slash, '/', '/', this.line, this.column)
                )
            }
            // Both cases are for strings
            case "'":
            case '"': {
                // String
                let string = []
                while (this.peek() !== char) {
                    string.push(this.advance())
                    if (this.peek === '\0')
                        // String wasn't closed
                        this.error('Unexpected EOF; expected a closing quote')
                }
                this.advance() // Skip closing quote
                string = string.join('')
                return this.tokens.push(
                    new Token(TOKENS.String, string, string, this.line, this.column)
                )
            }
            // Or
            case '|': {
                if (this.match('|'))
                    return this.tokens.push(
                        new Token(TOKENS.Or, '||', '||', this.line, this.column)
                    )
            }
            case '>': {
                // Check if it's >= or >
                if (this.match('='))
                    return this.tokens.push(
                    new Token(TOKENS.Gte, '>=', '>=', this.line, this.column)
                    )
                return this.tokens.push(
                    new Token(TOKENS.Gt, '>', '>', this.line, this.column)
                )
            }
            case '<': {
                // Check if it's <= or <
                if (this.match('='))
                    return this.tokens.push(
                    new Token(TOKENS.Lte, '<=', '<=', this.line, this.column)
                    )
                return this.tokens.push(
                    new Token(TOKENS.Lt, '<', '<', this.line, this.column)
                )
            }
            case '=': {
                // Check if it's ==
                if (this.match('='))
                    return this.tokens.push(
                    new Token(TOKENS.Equiv, '==', '==', this.line, this.column)
                    )
            }
            case '&': {
                // Check if it's &&
                if (this.match('&'))
                    return this.tokens.push(
                    new Token(TOKENS.And, '&&', '&&', this.line, this.column)
                    )
            }
            case '!': {
                // Check if it's ! or !==
                if (this.match('='))
                    return this.tokens.push(
                    new Token(TOKENS.NotEquiv, '!==', '!==', this.line, this.column)
                    )
                return this.tokens.push(
                    new Token(TOKENS.Not, '!', '!', this.line, this.column)
                )
            }
            case ' ':
            case '\r': {
                // Ignore whitespace
                return
            }
            case '\n': {
                // Also ignore, but update line
                this.line++
                this.column = 0
                return
            }
            default:
                // Check if it's a number
                if (isNumber(char)) {
                    // Start collecting the digits
                    let number = [char]
                    while (isNumber(this.peek()) || (this.peek() === "." && !number.includes(".")))
                        number.push(this.advance())
                    number = number.join("")
                    // Add TOKENS.Number
                    return this.tokens.push(
                        new Token(
                            TOKENS.Number,
                            number,
                            Number(number),
                            this.line,
                            this.column
                        )
                    )
                } else if (isChar(char)) {
                    // Collect the identifier
                    let identifier = [char]
                    while (isAlphanumeric(this.peek())) identifier.push(this.advance())
                    identifier = identifier.join('')
                    // Check if it's a Keyword
                    if (Object.keys(KEYWORDS).includes(identifier))
                        return this.tokens.push(
                            new Token(
                                TOKENS.Keyword,
                                identifier,
                                KEYWORDS[identifier],
                                this.line,
                                this.column
                            )
                        )
                    // Check if it's a boolean
                    else if (identifier === 'true' || identifier === 'false')
                        return this.tokens.push(
                            new Token(TOKENS.Boolean, identifier, identifier === 'true')  
                        )
                    // If it's neither, just add an identifier
                    return this.tokens.push(
                        new Token(TOKENS.Identifier, identifier, identifier, this.line, this.column)
                    )
                } else this.error('Unexpected symbol ' + char)
        }
    }
    
    // Check if the next character is the same as the current one
    match(char) {
        if (this.peek() === char) return this.advance
        return false
    }

    // Loops over each token and scans it
    scanTokens() {
        while (this.peek() != '\0') this.scanToken()
        this.tokens.push(new Token(TOKENS.EOF, null, null, this.line, this.column))
        return this.tokens
    }
}
