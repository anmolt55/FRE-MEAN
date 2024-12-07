
Array.prototype.myReduce = function (fn, initacc) {
    let accumulator, startIndex;
    if(initacc !== undefined){
        accumulator = initacc;
        startIndex = 0;
    }
    else{
        accumulator = this[0];
        startIndex = 1;
    }

    for(let i = startIndex; i< this.length; i++){
        accumulator = fn(accumulator, this[i], i, this );
    }
    return accumulator;
};
const numbers = [175, 50, 25];
console.log(
numbers.reduce(function(acc, cur) {
return acc - cur;
})

);  