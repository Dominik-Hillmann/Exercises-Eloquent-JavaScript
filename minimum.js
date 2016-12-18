/*  
    - write a function taking 2 numbers and returning their minimum
*/

function min(number1, number2) 
{
    if (number1 > number2) 
    {
        return number2;
    } 
    else if (number2 > number1) 
    {
        return number1;
    } 
    else 
    { 
        console.log("The two numbers have the same size.");
        return undefined;
    }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10