# Project-1

General Assembly Software Engineering Immersive - Project 1


# Yahtzee

Created by Reid Miller.

 Yahtzee is one of the world's most popular dice rolling games. It's great for a game night with both large and small groups. The object of the game is to roll five dice in order to score combinations and get the highest total score. Yahtzee scoring can be confusing at first, but with some patience you'll be enjoying a game of Yahtzee in no time.


## Introduction

An in browser Yahtzee game created with HTML/CSS/Javascript. I tried to recreate the game of Yahtzee on my own without any help from other Yahtzee games online(I did look at the design of some for ideas for rolling the dice).

## Technical Requirements

* Display a game in the browser
* Switch turns between two players
* Design logic for winning & visually display which player won
* Include separate HTML / CSS / JavaScript files
* Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
* Use Javascript or jQuery for DOM manipulation
* Deploy your game online, where the rest of the world can access it**
* Use semantic markup for HTML and CSS (adhere to best practices)


## How to Play
The goal is to score the maximum number of points by rolling combinations of five dice and filling out the required fields of the scoresheet to achieve the highest possible score.

## Creating the Game
I first started by writing out the process of creating the game on paper to help me map out my ideas.  After writing out the steps in english I began to write out the HTML with each players scorecards first and just numbers for the die to start. I then in Javascript (with help from the TA's) decided to create and object of objects to have the dices value and whether or not they are being held with the value of "false".
```javascript
var dice = {
  dice1: {value: 0, hold: false},
  dice2: {value: 0, hold: false},
  dice3: {value: 0, hold: false},
  dice4: {value: 0, hold: false},
  dice5: {value: 0, hold: false}
}
```
This way when a dice has being held I could set the value equal to true or false when not being held for easy toggling. To create the illusion of the dice being rolled I then used Math.random() function to randomize numbers between 1 and 6.  This also allowed me to cycle through my dice images to display for the user.
```javascript
randomDie1 = Math.ceil(Math.random() * 6);
dice1.src = "img/dice" + randomDie1 + ".png";
```
My initial plan was to have the dice images rotate and spin as if they were really rolling but settled on just having the faces of the dice images appear(I will add this feature in the future).
