//child process is a node module used to create sub process within a script

const cp = require('child_process')


//cp.execSync('calc')
//cp.execSync('start chrome https://www.scaler.com/topics')

console.log('output '+ cp.execSync('node demo.js'))