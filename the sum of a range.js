/*
    Exercise: The Sum of a Range
    - write range function that takes vars start and end and outputs all the numbers from start to end as array
    - then a sum function that takes array of numbers and returns sum
    - then modify for steps for building up the array
*/

// Part 1
//creates array from start to end
function range(start, end)
{
    var fromTo = [];
  
    if(start < end)
    {
        for(var i = start; i <= end; i++){ fromTo.push(i); }
    }
    else if(start > end)
    {
        for(var i = start; i >= end; i--){ fromTo.push(i); }
    }
    else
    {
        fromTo.push(start);
    }
    
    return fromTo;
}

// Part 2
// adds up every number from beginning until the end
function sum(inputArray) //missing: not tested whether input is an array
{
   var output = 0;
   
   for(var i = 0; i < inputArray.length; i++)
   {
       output = output + inputArray[i];
   }
   return output;
};