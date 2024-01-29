// WPU Coding Challenge 2024
// 5/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c

 
function zeroFuel(distance, mpg, gallon){
   
//    return gallon * mpg >= distance
   return distance / mpg <= gallon
}


console.log(zeroFuel(50,25,3))
