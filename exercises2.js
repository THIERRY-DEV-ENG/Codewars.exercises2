// Use a function that calculates the sum of all integers from 1 up to given number (inclusive)//
1.var summation = function (num){
  if (num === 1) return 1;
  return num + summation(num - 1)
}
2.var summation = function (num){
  return num *(num + 1) /2;
}