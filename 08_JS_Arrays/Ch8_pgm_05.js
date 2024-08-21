
// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  var index = dayInWeek - 1;
  var visitorReport;

  visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
  visitorReport += "on " + days[index];

  return visitorReport;
};


var visitors = [ 354, 132, 210, 221, 481, 190, 220 ];

var reportForFriday = getVisitorReport(visitors, 5);
console.log(reportForFriday);

var reportForSaturday = getVisitorReport(visitors, 6);
console.log(reportForSaturday);

var reportForSunday = getVisitorReport(visitors, 7);
console.log(reportForSunday);


var getWeeklyVisitorReport = function(monthArray, weekNumber, dayInWeek) {
  var week = monthArray[weekNumber - 1];  
  return getVisitorReport(week, dayInWeek);  
};


var week1 = [ 354, 132, 210, 221, 481, 190, 220 ];
var week2 = [ 400, 150, 210, 230, 500, 210, 230 ];
var week3 = [ 380, 140, 220, 240, 490, 200, 240 ];
var week4 = [ 370, 130, 200, 250, 470, 190, 210 ];

var monthArray = [week1, week2, week3, week4];


console.log(getWeeklyVisitorReport(monthArray, 1, 5));  
console.log(getWeeklyVisitorReport(monthArray, 2, 6));  
console.log(getWeeklyVisitorReport(monthArray, 3, 2));  
console.log(getWeeklyVisitorReport(monthArray, 4, 7));  




/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */
