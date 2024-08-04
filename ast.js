export class Literal {
    constructor(value) {
        this.type = 'Literal'
        this.value = value
    }
}

export class Array {
    constructor(value) {
        this.type = 'Array'
        this.value = value
    }
}

export class Var {
    constructor(name, value) {
        this.type = 'Var'
        this.name = name
        this.value = value
    }
}

export class Binary {
    constructor(left, operator, right) {
        this.type = 'Binary'
        this.left = left
        this.operator = operator
        this.right = right
    }
}

export class Func {
    constructor(name, params, body) {
        this.type = 'Func'
        this.name = name
        this.params = params
        this.body = body
    }
}

export default {
    Literal,
    Array,
    Var,
    Binary,
    Func
}