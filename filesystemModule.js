const { readFileSync, writeFileSync } = require('fs');
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
// console.log(first, second);

writeFileSync('./content/result_file.txt', `This file is altered and make change : ${first}, ${second}, new content that is edited `, { flag: 'a' })
console.log(writeFileSync);
console.log('done with the FS Sync ');
console.log('beginning the new one.');