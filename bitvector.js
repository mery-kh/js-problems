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

function get(vector, i) {
    let bigIndex = Math.floor(i / 31);
    let smallIndex = i % 31;
    let value = vector[bigIndex] & (1 << smallIndex);
    return value !== 0;
}

function getSortedNumbers(vec) {
    for(let j=0; j<vec.length; ++j){
        if(vec[j] !== 0) {
            let bin = vec[j].toString(2).split('').reverse().join('');
            for (let i = 0; i < bin.length; ++i) {
                if (bin[i] === '1') console.log(i+j*31);
            }
        }
    }
}

let vec = buildVector(158);
console.log(set(vec, 36));
console.log(set(vec, 68));
console.log(set(vec, 38));
console.log(get(vec, 36));
console.log(get(vec, 9));
getSortedNumbers(vec)