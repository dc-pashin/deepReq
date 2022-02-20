const fs = require('fs')


const json = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))

function firstLineIteration (data, cond) {

    for (let k in data) {
        deepIteration(data[k], cond)
    }

}

function deepIteration(item, cond) {

    for (let k in item) {

        if (k === cond[0] && item[k] === cond[1]) {
            console.log(k, item[k])
        }
        
        if (typeof item[k] === 'object' || typeof item[k] === 'array') {
            deepIteration(item[k], cond)
        }
    }

}

firstLineIteration(json, ['id', 1])





































