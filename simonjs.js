"use strict";

$(document).ready(function() {
	console.log("loaded");
	var sequence;
	var level = 1;
	var simonColor = ["blue-box", "red-box", "green-box", "yellow-box"];
	var simonText = $("#black-box").text("Simon").css("color", "white");
	simonText.css("font-size", "50pt");

// Allows you to click on the black box to start and restart a game. Level always starts at 1.
$("#black-box").click(function() { 
		level = 1;
		newGame();
		simonText.text("Simon");
	});

	// newGame starts the sequence. I'm utilizing a for loop to push a random number from the simonColor variable into the empty sequence array. The reason for generating a random number is because simonColor is an array with the values 0 - 3. These values correlate directly with the 4 colors in simonColor. Math.round is rounding the number to a whole number because Math.random generates a number between 0 and 1 (0.344) which is why I multiply it by simonColor as simonColor has 4 colors in it. However, arrays start counting at 0, whcih means, in array standards, simonColor has 0, 1, 2, 3 values(colors) within it and that is why I subtract 1 from simonColor.length. Then I call playSequence, so the computer plays the randomly generated sequence to the player.
	var newGame = function() {
		sequence = [];
		var gameOver = false;
			for (var i = 0; i < level; i++) {
			sequence.push(Math.round(Math.random() * (simonColor.length - 1)));
			} 
			
			playSequence();
	};

	var playSequence = function() {
		simonColor.forEach(function(color) {
			$("#" +color).off("click");
		});
		sequence.forEach(function(color, index) {
			setTimeout(function() {
				$("#" + simonColor[color]).toggleClass("light");
				setTimeout(function() {
					$("#" + simonColor[color]).removeClass("light");
				}, 700)
			}, index * 1000)
		});
		setTimeout(activateButtons, level * 1000)
	};

	var activateButtons = function() {
		simonColor.forEach(function(color) {
			$("#" +color).on("click", clickHandler);
		});
	};

	var clickHandler = function() {
		var color = this
		$(this).toggleClass("light");
		setTimeout(function() {
			$(color).removeClass("light");
		}, 500); 
		var correctSequence = sequence.shift();
		
		if (simonColor[correctSequence] === color.id) {
			if (sequence.length === 0) {
			setTimeout(function() {
				simonText.text("Level "+level);
				level++
				newGame();
			}, 2000)
		}
				} else {
				$("#").off("click");
				simonText.text("You Lost! Restart");
				level = 1;
				newGame();
			}	
			playerWins();
			// mySound.play();
	};	
		
var playerWins = function() {
	if (level > 10) {
		if (sequence.length === 0) {
		alert("CONGRATS! YOU WON");
		simonText.text("YOU WON!");
		$("#").off("click");
			level = 1;
		newGame();
		}
	}	
	endGame();
}

var endGame = function() {
	clickHandler.off("click");
}

// var mySound = newAudio('Indiana.mp3');


});


// - Increment `level` only when the user finishes the sequence 
// (when there are no colors left to click on)
// - Use `var correctColor = sequence.shift()` to remove the 
// first element from the sequence, then use that to compare 
// with the one they clicked on
// - If they clicked on the right one, then check if the sequence is empty.  
// If it is, do `level++` in `newGame()` to advance and generate 
// a new sequence with 1 extra color



// assuming a scenario where a player is on level 4 and 
// he has 4 colors in his sequence.
// level === 4
// sequence === [1,3,2,4]
// var correctButton = sequence.shift();
// Now sequence === [3,2,4] and correctButton === 1
// if (simonColor[correctButton] == theClickedButton.id) {
  // then we need to check if they have completed the sequence
  // if (sequence.length == 0)  {
    // okay, there are no more colors left to click on, 
    // so lets start the next level
    // level++;
    // newGame();
  // }
// }
// } else {  // the player clicked the wrong button
  // alert('You lose!');
  // level = 1;
  // newGame();

  // That's the logic you need to encode in JS.  
  // What I wrote won't work as-is, you need to read through it, 
  // and see how the logic works and adapt it to your program.

//--------------------------------------------------------------

	// var simonColor = ["blue-box", "red-box", "green-box", "yellow-box"];

	// var simonText = $("#black-box").text("Simon").css("color", "white");
	// simonText.css("font-size", "55pt");

	// var addEventListeners = function() {

	// 	$("#black-box").click(function() {
	// 		getRandom()
	// 	});

	// 	var getRandom = function() {
	// 		var colorLight = (Math.round(Math.random() * (simonColor.length - 1)));
	// 		sequence.push(colorLight)
	// 		$("#" + simonColor[colorLight]).toggleClass("light");
	// 		setTimeout(function() {
	// 			$("#" + simonColor[colorLight]).removeClass("light");
	// 		}, 500)
	// 	};

	// 	// 	sequence.forEach() {
	// 	// 		doCheck();
	// 	// 	}
	// 	// };

	// 	var doCheck = function(sequence) {
	// 		// get user to click.

	// 		$('.box').click(function() {
	// 				var playerChoice = this.id

	// 			})
	// 			// compariosn of user click vs sequence item we're currently looping on 
	// 	};



	// 	$("#blue-box").click(function() {
	// 		var color = this
	// 		$(this).toggleClass("light");
	// 		setTimeout(function() {
	// 			$(color).removeClass("light");
	// 		}, 500);
	// 	});

	// 	$("#red-box").click(function() {
	// 		var color = this
	// 		$(this).toggleClass("light");
	// 		setTimeout(function() {
	// 			$(color).removeClass("light");
	// 		}, 500);
	// 	});

	// 	$("#green-box").click(function() {
	// 		var color = this
	// 		$(this).toggleClass("light");
	// 		setTimeout(function() {
	// 			$(color).removeClass("light");
	// 		}, 500);
	// 	});

	// 	$("#yellow-box").click(function() {
	// 		var color = this
	// 		$(this).toggleClass("light");
	// 		setTimeout(function() {
	// 			$(color).removeClass("light");
	// 		}, 500);
	// 	});



	// 	var play = function() {
	// 		var colorsPlayed = [colorLight];

	// 		$("#black-box").on("click", "#black-box", function() {
	// 			for (var i = 0; i <= simonColor.length; i++) {
	// 				if (playerChoice === colorsPlayed[i]) {
	// 					console.log("win");
	// 				} else {
	// 					alert("Nice Try, Dr. Jones!");
	// 				}
	// 			}
	// 		});

	// 	};

	// };

	// addEventListeners();

// });