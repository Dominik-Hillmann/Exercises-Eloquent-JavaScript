/*  
    info lists: lists are data structures that look like this (not to be confused with arrays): 
*/
    
var testList =
{
    value: 5,
    rest:
    {
        value: 27,
        rest:
        {
            value: 33,
            rest:
            {
                value: 41,
                rest: null
            }
        }
    }
};

/* 
    exercise:
    - write two helper functions
        - "prepend": takes element and list and adds element in front of the given list
        - "nth": takes a number and a list and looks what value is at the nth stage of that list (undefined if value cannot be found)
        - also write a recursive version of "nth"
        
    - "arrayToList": takes an array and builds up a list with the elements of the array as its values
*/

//adds input element in front of a list as part of the list
function prepend(newElement, givenList)
{
    var newList = 
    {
        value: newElement,
        rest: givenList
    };
    
    return newList;
};

//takes a list object and a stage and tells you which value is at the nth place
function nth(givenList, n)
{
  	n = n - 2; // needs to be this way in order for the for-loop to work
    var list = givenList;
    
    for(var i = 0; i <= n; i++)
    {
      	if(list.rest == null){ return undefined }
        list = list.rest;
    }
    return list.value;
};

//recursive version of the "nth" function
function recursiveNth(givenList, n)
{
    if(n == 0)
    {
        return givenList.value;
    }
    else 
    {
      return recursiveNth(givenList.rest, n - 1);
    }
};




// transforms an array into a list
function arrayToList(inputArray)
{
    var outputList =
    {
        value: inputArray[inputArray.length - 1],
        rest: null
    };
  
    for(var i = 2; i <= inputArray.length; i++)
    {
      outputList = prepend(inputArray[inputArray.length - i], outputList);  
    }
  
    return outputList;
};

// transforms list into an array
function listToArray(inputList)
{
    var outputArray = [];
    
    //for(about inputList; as long as the inputList has not rest: null; new List is list.rest)
    for(inputList; inputList != null; inputList = inputList.rest)
    {
        outputArray.push(nth(inputList, 1));
        /* here, second argument for nth is 1 because in the for loop,
           the new list is always the list.rest of the previous list.
           Therefore, we always take a look at the first list value. */
    }
    
    return outputArray;
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20