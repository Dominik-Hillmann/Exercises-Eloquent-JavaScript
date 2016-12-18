/*  you can get nth character of a string by writing
    "string".charAt(n) 
    similar to "string".length
    returned value is string with the letter in it
    first character is pos 0
    last one at string.length - 1
    
    function count Bs that takes string as its only argument and counts the number of Bs (uppercase only)
    
    next, a function that takes letter and string as arguments and counts the how many times the taken letter appears in the string
*/


// This function counts the number of "B" in a string.
function countBs(my_string)
{
    var B_counter = 0;
    var string_position = 0;
        
    do
    {
        if(my_string.charAt(string_position) == "B")
        {
            B_counter += 1;
        }
        string_position += 1;
    }
    while(0 <= (my_string.length - string_position));
    return B_counter;
}




// This function counts how often a certain letter occurs in a string.
function count_letter(my_string, letter)
{
    var letter_counter = 0;
    var string_position = 0;
    
    do
    {
        if(my_string.charAt(string_position) == letter)
        {
            letter_counter += 1;
        }
        string_position += 1;
    }
    while(0 <= (my_string.length - string_position));
    return letter_counter;
}

console.log(count_letter("kakkerlak", "k"));