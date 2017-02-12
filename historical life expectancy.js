//given function to calculate average of an array
function average(array) 
{
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

//this filters all elements from an object by looking at the century of death
function centuryFilter(sourceArray, century) 
{
    return sourceArray.filter(function(person) 
    {
        return century == Math.ceil(person. died / 100);
    });
};

//this makes an array that only contains the years of death of a certain object
function deathFilter(inputObject, century) 
{
    var returnedArray = [];
  
    for(var i = 0; i <= centuryFilter(inputObject, century).length - 1; i++) 
    {
        returnedArray.push(centuryFilter(inputObject, century)[i].died); 
    }
    return returnedArray;
}

//makes array that only contains the years of birth of an array
function birthFilter(inputObject, century) 
{
    var returnedArray = [];
  
    for(var i = 0; i <= centuryFilter(inputObject, century).length - 1; i++) 
    {
        returnedArray.push(centuryFilter(inputObject, century)[i].born); 
    }
    return returnedArray;
}

//makes array that contains the number of years the person lived by substracting birth years from death years
function liveSpan(deathYears, birthYears) 
{
    var livingYears = [];
    for(var i = 0; i < deathYears.length; i++)
    {
        livingYears.push(deathYears[i] - birthYears[i]);
    }
    return livingYears;
}

//binds all previous functions into one with only one argument
function allTogether(century) 
{
    return liveSpan(deathFilter(ancestry, century), birthFilter(ancestry, century));
}

for(var i = 16; i <= 21; i++) 
{
    console.log(average(allTogether(i)));
}
//   16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
