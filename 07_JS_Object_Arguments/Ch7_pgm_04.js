
// Moving a point in 2D
var point1;
var point2;
var point3;
var point4;
var move;
var showPoint;
var reflectX;
var rotate90;

move = function (point, change) {
    return {
        x: point.x + change.x,
        y: point.y + change.y
    };
};

showPoint = function (point) {
    console.log("( " + point.x + " , " + point.y + " )");
};

reflectX = function (point) {
    return {
        x: point.x,
        y: -point.y
    };
};

rotate90 = function (point) {
    return {
        x: -point.y,
        y: point.x
    };
};


point1 = { x : 2, y : 5 };


point2 = move(point1, { x : 4, y : -2 });

console.log("Original point1:");
showPoint(point1);

console.log("Move 4 across and 2 down:");
showPoint(point2);


point3 = reflectX(point1);
console.log("Reflecting point1 across the x-axis:");
showPoint(point1);
showPoint(point3);


point4 = rotate90(point1);
console.log("Rotating point1 90 degrees anticlockwise:");
showPoint(point1);
showPoint(point4);




/* Further Adventures
 *
 * 1) Change the amount by which the point is moved
 *    by altering the x and y properties of
 *    the object literal passed to the move function.
 *
 * 2) Write a reflectX function that reflects
 *    a point in the x-axis, returning the new point.
 *
 * 3) How about a rotate90 function that rotates
 *    the point by 90 degrees anticlockwise
 *    around ( 0 , 0 )?
 *
 */
