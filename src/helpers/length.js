/**
 * Returns the length of the given array.
 *
 * ```js
 * <%= length(['a', 'b', 'c']) %>
 * //=> 3
 * ```
 *
 * @param  {Array} `array`
 * @return {Number} The length of the array.
 * @api public
 */
module.exports = function(arr) {
    return Array.isArray(arr) ? arr.length : '0';
};
