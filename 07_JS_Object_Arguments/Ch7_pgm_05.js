
// Using Math.min and Math.max

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

var showLarger = function (num1, num2) {
    var larger = Math.max(num1, num2);
    var smaller = Math.min(num1, num2);

    console.log(larger + " is larger than " + smaller);
};

var showSmallest = function (num1, num2, num3) {
    var smallest = Math.min(num1, num2, num3);

    console.log(smallest + " is the smallest among " + num1 + ", " + num2 + ", and " + num3);
};

showSmaller(12, 3);
showSmaller(-10, 3);
showSmaller(7, 22);    
showSmaller(-5, -3);   
showSmaller(0, 0);     
showSmaller(15, 10);   


showLarger(12, 3);
showLarger(-10, 3);   
showLarger(7, 22);
showLarger(-5, -3);   
showLarger(0, 0);
showLarger(15, 10);


showSmallest(12, 3, 5);   
showSmallest(-10, 3, 7);  
showSmallest(0, 0, 0);    
showSmallest(15, 10, 5);  




/* Further Adventures
 *
 * 1) Try out some different arguments.
 *
 * 2) Write a showLarger function.
 *
 * 3) Write a showSmallest function that takes
 *    three arguments and displays the smallest
 *    of the three.
 *
 */
