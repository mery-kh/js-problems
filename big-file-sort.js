const fs = require("fs");
let vec = buildVector(2000000);
const lineReader = require('readline').createInterface({
    input: fs.createReadStream(`${__dirname}/numbers.txt`)
});
let writeStream = fs.createWriteStream('sorted.txt', {encoding: 'utf-8'});

function buildVector(bits) {
    let elements = Math.ceil(bits / 31);
    let vector = new Array(elements);
    for (let i = 0; i < elements; i++) {
        vector[i] = 0;
    }
    return vector;
}

function set(vector, i) {
    let bigIndex = Math.floor(i / 31);
    let smallIndex = i % 31;
    vector[bigIndex] = vector[bigIndex] | (1 << smallIndex);
    return vector;
}

function getSortedNumbers(vec) {
    for (let j = 0; j < vec.length; ++j) {
        if (vec[j] !== 0) {
            let bin = vec[j].toString(2).split('').reverse().join('');
            for (let i = 0; i < bin.length; ++i) {
                if (bin[i] === '1') {
                    let str = i + j * 31;
                    writeStream.write(`${str.toString()}\n`, 'utf-8');
                }
            }
        }
    }
}

lineReader.on('line', function (line) {
    set(vec, +line)
}).on('close', () => {
    getSortedNumbers(vec);
});
