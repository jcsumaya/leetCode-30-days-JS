/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let _array = [];
    for(i = 0; i < arr.length; i++){
        _array.push(fn(arr[i], i))
    };
    return _array;
};