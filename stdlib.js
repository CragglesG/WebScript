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

    get(headers=[]) {
        const HTTPRequest = new XMLHttpRequest()
        HTTPRequest.open("GET", this.url, false)
        for (let i = 0; i < headers.length; i++) {
            HTTPRequest.setRequestHeader(headers[i][0], headers[i][1])
        }
        HTTPRequest.send(null)
        return HTTPRequest
    }

    post(body=null, headers=[]) {
        // May be unstable - has not yet been tested
        const HTTPRequest = new XMLHttpRequest()
        HTTPRequest.open("POST", this.url, false)
        for (let i = 0; i < headers.length; i++) {
            HTTPRequest.setRequestHeader(headers[i][0], headers[i][1])
        }
        HTTPRequest.setRequestHeader()
        HTTPRequest.send(body)
    }

    put(body=null, headers=[]) {
        // May be unstable - has not yet been tested
        const HTTPRequest = new XMLHttpRequest()
        HTTPRequest.open("PUT", this.url, false)
        for (let i = 0; i < headers.length; i++) {
            HTTPRequest.setRequestHeader(headers[i][0], headers[i][1])
        }
        HTTPRequest.send(body)
    }

    delete(body=null, headers=[]) {
        // May be unstable - has not yet been tested
        const HTTPRequest = new XMLHttpRequest()
        HTTPRequest.open("DELETE", this.url, false)
        for (let i = 0; i < headers.length; i++) {
            HTTPRequest.setRequestHeader(headers[i][0], headers[i][1])
        }
        HTTPRequest.send(body)
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