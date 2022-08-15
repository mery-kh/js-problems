function stringReverse(str) {
    let arr = [];
    for (let s of str) {
        arr.push(s);
    }
    return arr.reverse().join('');
}
console.log(stringReverse('abc‍🦰‍👦'));