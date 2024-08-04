import fs from 'fs';

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
        console.log(program)
    } else {
        // Interactive REPL time!
    }
})
