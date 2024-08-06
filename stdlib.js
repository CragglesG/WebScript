import { XMLHttpRequest } from "xmlhttprequest"

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
    }

    get() {
        const HTTPRequest = new XMLHttpRequest()
        HTTPRequest.open("GET", this.url, false)
        HTTPRequest.send(null)
        return HTTPRequest
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