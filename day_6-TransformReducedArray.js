/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    if (!nums.length) return init;

    let out = init;

    for (num of nums) {
        out = fn(out, num);
    }

    return out;
};