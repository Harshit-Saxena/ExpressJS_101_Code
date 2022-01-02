//aync filesystem
const { readFile, writeFile } = require('fs')
console.log('start');
readFile('./content/first.txt','utf8', (err, result) =>
{
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err,first) =>
    {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        readFile('./content/second.txt', 'utf8', (err, result) =>
        {
            if (err) {
                console.log(err);
                return;
            }
            writeFile('./content/newFileAsync.txt', `This is build from async callback function: ${first}, ${second}`, { flag: 'a' }, (err, second) =>
        {
            if (err) {
                console.log(err);
                return;
            }
            console.log('done with this wite file task');
        })
        })
    })
})