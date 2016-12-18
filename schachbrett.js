/* 
   Chess board
   
   - write program creating an 8x8 grid with " " and "#"
   - passing it to console.log, it should look like this:

    # # # #
   # # # #
    # # # #
   # # # #
    # # # #
   # # # #
    # # # #
   # # # #

   - when done, create a program that takes a number of how big the chess field is supposed to be
*/

var size = prompt("Groesse des Schachbretts:");

var not_even_line = "_";
var even_line = "#";

// first, making a line starting with "_" size characters long
do 
{
  if(not_even_line.length == size) 
  {
    break;
  }
  not_even_line += "#";
  if(not_even_line.length == size) 
  {
    break;
  }
  not_even_line += "_" 
} 
while(not_even_line.length <= size);

// secondly, making a line starting with "#" size chars long
do
{ 
  if(even_line.length == size)
  {
    break;
  }
  even_line += "_";
  if(even_line.length == size)
  {
    break;
  }
  even_line += "#" 
}
while(even_line.length <= size)

    
// and expand size field to size lines
for(counter = 1; counter <= size; counter += 2)
{
  console.log(not_even_line);
  if(counter == size)
  {
    break;
  }
  console.log(even_line);
}