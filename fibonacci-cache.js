function fc(n){
    console.log('fc');
    fc.cache = fc.cache ?? [];
    if(n <= 0) return -1;
    if(n == 1) return 0;
    if(n == 2 || n == 3) return 1;
    if(!fc.cache[n]){
        fc.cache[n] = fc(n-1) + fc(n-2);
    }
    return fc.cache[n];
}
console.log(fc(5))
console.log(fc(6))


