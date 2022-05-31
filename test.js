const path = require('path')
const fs = require('fs')

fs.appendFile(path.resolve('./test.txt'), '\r\nnewFile', error => console.log(error))
console.log(5555)