// A blog post

var player1;
var player2;

player1 = {
	  name: "Max",
	  score: 0
};

player2 = {
	name: "Rin",
	score: 100
};

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 50;

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + (player1.score/10);
console.log(player1.name + " has scored " + player1.score);

sum = player1.score + player2.score;
console.log("Total score of " + player1.name + " and " + player2.name + " is " + sum);




/* Further Adventures
 *
 * 1) Display some of the properties.
 *
 * 2) Add a second post.
 *
 */