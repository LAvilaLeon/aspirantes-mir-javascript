function max(num) {
    let numMax = 0;
    if (num.length !==0) {
        for (let i = 0; i < num.length; i++){
            if (numMax <num[i]){
                numMax = num[i];
            }
        }
        return numMax;
    }  
    else {
        return undefined
    }
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined