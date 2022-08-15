function isUnique(str) {
    let arr = [];
    for (let i = 0; i < str.length; ++i) {
        if (!arr.includes(str[i])) arr.push(str[i]);
        else return false;
    }
    return true;
}

console.log(isUnique('Mery'));