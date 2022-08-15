function isUnique(str) {
    let obj = {};
    for (let s of str) {
        if (obj[s]) return false;
        obj[s] = true;
    }
    return true;
}

console.log(isUnique("Mery‍👦"));