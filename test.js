import { exec } from 'child_process'

let child

child = exec("node webscript.js test.ws",
    function (error, stdout, stderr) {
        if (error != null) {
            console.log(error)
            throw new Error("Test failed: output not as expected")
        }
    }
)
