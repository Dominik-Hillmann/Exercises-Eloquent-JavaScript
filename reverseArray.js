// a function that reverses the input array's order by creating a new array

function reverseArray(inputArray)
{
    var outputArray = [];
    
    for(var i = 0; i <= inputArray.length; i++)
    {
        outputArray.push(inputArray[(inputArray.length - i)]);
    }
    
  	// I don't know why but the [0] is always undefined, so I have to splice it.
  	outputArray.splice(0, 1);
    return outputArray;
};


// a function that reverses the elements of an array by changing the original input array
function reverseArrayInPlace(inputArray)
{
    var temp; 
    var tempForZero = inputArray[0];
    
    for(var i = 1; i <= Math.floor(inputArray.length / 2); i++)
    {
        temp = inputArray[i];
        inputArray[i] = inputArray[(inputArray.length - i)];
        inputArray[(inputArray.length - i)] = temp;
    }
    
    inputArray.push(tempForZero);
    inputArray.splice(0, 1);
    return inputArray;
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]