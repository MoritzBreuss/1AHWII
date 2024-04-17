function fakt(n) {
    if (n < 1) {
        throw new Error('must be 1 or greater')
    }
    if (n === 1) {
        return 1;
    }
    return fakt(n-1) * n;
    

}


console.log(fakt(2));