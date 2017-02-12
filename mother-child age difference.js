//given function to calculate average of an array
function average(array) 
{
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});

// first filter: only persons whose mothers are known
var motherAncestry = ancestry.filter(function(person) 
                                     { 
  									 return person.mother != null; 
});

// second filter: only persons whose mothers are in the data set
var filteredAncestry = [];
motherAncestry.forEach(function(testPerson)
{
    for(var i = 0; i < motherAncestry.length; i++)
    {
        if(testPerson.mother == motherAncestry[i].name)
        {
            filteredAncestry.push(testPerson);
        }
    }
});

// an array that only contains the difference in birth years between the mothers and their children
var onlyBirths = [];
for(var i = 0; i < filteredAncestry.length; i++)
{
  	// birth year of every filtered child minus the birth year of every mother searched by name
    onlyBirths.push(filteredAncestry[i].born - byName[filteredAncestry[i].mother].born);
}

console.log(average(onlyBirths));
// 30.9375
