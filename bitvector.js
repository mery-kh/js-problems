function buildVector(bits) {
    let elements = Math.ceil(bits / 32);
    let vector = new Array(elements);
    for (let i = 0; i<elements; i++) {
        vector[i] = 0;
    }
    return vector;
}

function set(vector, i) {
    let bigIndex = Math.floor(i / 32);
    let smallIndex = i % 32;
    vector[bigIndex] = vector[bigIndex] | (1 << smallIndex);
    return vector;
}

function get(vector, i) {
    let bigIndex = Math.floor(i / 32);
    let smallIndex = i % 32;
    let value = vector[bigIndex] & (1 << smallIndex);
    return value !== 0;
}

let vec = buildVector(158);
console.log(set(vec, 4));
console.log(set(vec, 6));
console.log(get(vec, 4));
console.log(get(vec, 9));