import axios from "axios"

export class WebScriptError extends Error {
    constructor(msg) {
        super()
        this.message = msg
    }

    toString() {
        return this.message
    }
}

export class Request {
    constructor(url) {
        this.url = url
        this.data
        this.status
        this.headers
    }

    get() {
        axios.get(this.url)
            .then(function (response) {
                this.data = response.data
                this.status = response.status
                this.headers = response.headers

            })
            .catch(function (error) {
                throw new WebScriptError(`GET Request Error: ${error}`)
            })
    }
    
}

export default {
    request: new Request(),
    display: args => console.log(...args),
    random: ([min, max]) => {
        if (min >= 0 && max <= 1) return Math.random()
        return Math.random() * (max - min + 1) + min
    },
    round: number => Math.round(number)
}