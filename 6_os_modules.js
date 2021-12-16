
const os = require('os')

//info about current user pc
const user = os.userInfo()
console.log(user)

//system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currOS)