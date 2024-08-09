// The Standard Library, provides all useful pre-defined functions and methods in WebScript

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

// XMLHttpRequest Request Object
export class Request {
    constructor(url) {
        this.url = url
    }

    // Send a GET request
    get(headers=[]) {
        const HTTPRequest = new XMLHttpRequest()
        HTTPRequest.open("GET", this.url, false)
        for (let i = 0; i < headers.length; i++) {
            HTTPRequest.setRequestHeader(headers[i][0], headers[i][1])
        }
        HTTPRequest.send(null)
        return HTTPRequest
    }

    // Send a POST request
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

    // Send a PUT request
    put(body=null, headers=[]) {
        // May be unstable - has not yet been tested
        const HTTPRequest = new XMLHttpRequest()
        HTTPRequest.open("PUT", this.url, false)
        for (let i = 0; i < headers.length; i++) {
            HTTPRequest.setRequestHeader(headers[i][0], headers[i][1])
        }
        HTTPRequest.send(body)
    }

    // Send a DELETE request
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

// Export the standard library
export default {
    // request makes a new request object
    request: new Request(),
    // display() prints to the console
    display: args => console.log(...args),
    // random() generates a random number within a min and max
    random: ([min, max]) => {
        if (min >= 0 && max <= 1) return Math.random()
        return Math.random() * (max - min + 1) + min
    },
    // round() rounds a float/double to the nearest whole number
    round: number => Math.round(number)
}