// as soon as the loop encounters an element that is false according to the passed function, 'some' will return false
function some(inputArray, fct)
{
    var i = 0;
    do
    {
        if(fct(inputArray[i]) == true)
        {
            return true;
        }
        /* so the function got through the array without returning true until 
         * the last one --> means that it either returns true/false depending 
         * on the very last element
         */
        else if((i == inputArray.length - 1) && (fct(inputArray[i]) == false)) 
        {
             return false;
        }
        else
        {
            i++;
        }
      
    } while(i < (inputArray.length));
}

// basically the same as 'some', just switched true against false
function every(inputArray, fct)
{
    var i = 0;
    do
    {
        if(fct(inputArray[i]) == false)
        {
            return false;
        }
        else if((i == inputArray.length - 1) && (fct(inputArray[i]) == true))
        { 
             return true;
        }
        else
        {
            i++;
        }
      
    } while(i < (inputArray.length));
} 

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
