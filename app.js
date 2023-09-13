"use strict";

let HumanInput = document.querySelector(".HumanInputscore");

let AIInput = document.querySelector(".AiInputscore");

let ChangeMsg = document.querySelector("#messege-El");
let humanscore = document.querySelector(".Humanscore");
let Aiscore = document.querySelector(".AIScore");
let HumanInputCheck = [];

let HumanScore = 0;
let AIScore = 0;

function Rock() {
	HumanInput.textContent = "Rock";
	HumanInputCheck.push("Rock");
	aiInput();
}

function paper() {
	HumanInput.textContent = "Paper";
	HumanInputCheck.push("Paper");
	aiInput();
}

function scissor() {
	HumanInput.textContent = "Scissor";
	HumanInputCheck.push("Scissor");
	aiInput();
}

function Reset() {
	HumanInput.textContent = "-";
	AIInput.textContent = "-";
	HumanInputCheck = [];
	HumanScore = 0;
	AIScore = 0;
	humanscore.textContent = 0;
	Aiscore.textContent = 0;
	ChangeMsg.textContent = "Start Game";
}

function aiInput() {
	let AIgenerateInput = ["Rock", "Paper", "Scissor"];

	let randomNum = Math.floor(Math.random() * 3);
	AIInput.textContent = AIgenerateInput[randomNum];
	let AIval = AIgenerateInput[randomNum];
	gameCondition(AIval);
}

// function gameCondition(AIval) {
// 	let CheckVal;
// 	for (let i = 0; i < HumanInputCheck.length; i++) {
// 		CheckVal = HumanInputCheck[i];
//
// 	if (AIval === CheckVal) {
// 		ChangeMsg.textContent = "Draw";
// 	} else if (AIval !== CheckVal) {
// 		if (AIval === "Rock") {
// 			if (CheckVal === "Paper") {
// 				ChangeMsg.textContent = "You win";
// 				HumanScore += 1;
// 				humanscore.textContent = HumanScore;
// 			} else if (CheckVal === "Scissor") {
// 				ChangeMsg.textContent = "You lose";
// 				AIScore += 1;
// 				Aiscore.textContent = AIScore;
// 			}
// 		}
// 		if (AIval === "Paper") {
// 			if (CheckVal === "Rock") {
// 				ChangeMsg.textContent = "You lose";
// 				AIScore += 1;
// 				Aiscore.textContent = AIScore;
// 			} else if (CheckVal === "Scissor") {
// 				ChangeMsg.textContent = "You win";
// 				HumanScore += 1;
// 				humanscore.textContent = HumanScore;
// 			}
// 		}
// 		if (AIval === "Scissor") {
// 			if (CheckVal === "Rock") {
// 				ChangeMsg.textContent = "You win";
// 				HumanScore += 1;
// 				humanscore.textContent = HumanScore;
// 			} else if (CheckVal === "Paper") {
// 				ChangeMsg.textContent = "You lose";
// 				AIScore += 1;
// 				Aiscore.textContent = AIScore;
// 			}
// 		}
// 	}
// }

function gameCondition(AIval) {
	for (let i = 0; i < HumanInputCheck.length; i++) {
		let CheckVal = HumanInputCheck[i];

		if (AIval === CheckVal) {
			ChangeMsg.textContent = "Draw";
		} else {
			if (AIval === "Rock") {
				if (CheckVal === "Paper") {
					ChangeMsg.textContent = "You win";
					HumanScore += 1;
					humanscore.textContent = HumanScore;
				} else if (CheckVal === "Scissor") {
					ChangeMsg.textContent = "You lose";
					AIScore += 1;
					Aiscore.textContent = AIScore;
				}
			} else if (AIval === "Paper") {
				if (CheckVal === "Rock") {
					ChangeMsg.textContent = "You lose";
					AIScore += 1;
					Aiscore.textContent = AIScore;
				} else if (CheckVal === "Scissor") {
					ChangeMsg.textContent = "You win";
					HumanScore += 1;
					humanscore.textContent = HumanScore;
				}
			} else if (AIval === "Scissor") {
				if (CheckVal === "Rock") {
					ChangeMsg.textContent = "You win";
					HumanScore += 1;
					humanscore.textContent = HumanScore;
				} else if (CheckVal === "Paper") {
					ChangeMsg.textContent = "You lose";
					AIScore += 1;
					Aiscore.textContent = AIScore;
				}
			}
		}
	}
}
