// files

const fs = require('fs')



// // reading a file

// let fileContent = fs.readFileSync('f1.txt')

// console.log('data of file 1->'+ fileContent)

// // writing in a file

// fs.writeFileSync('f2.txt', 'This is file 2')
// console.log('File has been written')

// // append in a file

// fs.appendFileSync('f3.txt', ' This is updated data')

// console.log('The data has been appended')

// //delete a file
// fs.unlinkSync('f2.txt')
// console.log('File has been deleted')

// // Create a directory
// fs.mkdirSync('myDirectory')

// Check the content inside the directory

let folderPath = 'C:\\Users\\Arun Rao Nayineni\\The Ultimate Node\\1_Node Module System\\myDirectory'

let folderContent = fs.readdirSync(folderPath)

console.log('Folder Content ', folderContent)

// Check whether a directory exists or not
let doesExist = fs.existsSync('myDirectory')

console.log(doesExist)

// Remove directory

fs.rmdirSync('myDirectory')

console.log('The directory has been removed')
