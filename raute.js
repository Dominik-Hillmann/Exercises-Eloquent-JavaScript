/* Exercise 1:
   - write a loop that creates a triangle like this:

   #
   ##
   ###
   ####
   #####
   ######
   #######

*/

var raute = "#";

do 
{
  console.log(raute);
  raute = raute + "#";
} while (raute.length <= 7);