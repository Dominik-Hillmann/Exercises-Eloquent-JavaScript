/* use reduce method in combination with the concat method to "flatten" an array of arrays into one one single array */

var arrays = [[1, 2, 3], [4, 5], [6]];

var result = arrays.reduce(function(prev, next)
{
    prev = prev.concat(next);
    return prev;
});

console.log(result);
// → [1, 2, 3, 4, 5, 6]
