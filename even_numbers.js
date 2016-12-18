/*  other method of finding out whether number is even:
    0 even
    1 odd
    for any number N, its evenness is the same as for N - 2
    
    recursive function needed
    accept a number parameter, return a boolean
*/

function isEven(number) 
{
    if(number >= 0) 
    {
        if(number == 0) 
        {
            return true;
        } 
        else if (number == 1)
        {
            return false;
        } 
        else 
        {
            isEven(number - 2);
        }
        
    }
    else
    {
        
        if(number == 0) 
        {
            return true;
        } 
        else if (number == 1)
        {
            return false;
        } 
        else 
        {
            isEven(number + 2); //here counted upwards
        }  
    }
}