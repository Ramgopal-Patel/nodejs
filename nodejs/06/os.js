const os = require('os')

const release=os.release()
const osName = os.type()

console.log("Release version:-",release)
console.log("Os name:-", osName)
