var dice = {
  dice1: {value: 0, hold: false},
  dice2: {value: 0, hold: false},
  dice3: {value: 0, hold: false},
  dice4: {value: 0, hold: false},
  dice5: {value: 0, hold: false}
}

var diceImg1;
var diceImg2;
var diceImg3;
var diceImg4;
var diceImg5;
var rollsLeft;

var p1Turn = 13;
var p2Turn = 13;
var totalMoves = 26;
var newGame;

var turns = 3;
var dice1;
var dice2;
var dice3;
var dice4;
var dice5;
var roll;
var diceboard;
var total;
var yahtzeemsg;
var playerturn;
var scoreMsg;
var resetDice;

var arr;
var p1ones;
var p1uptotal;
var p1lwTotal;
var p1bonus;
var p1Checkbox;
var scoresheet1;
var p1ThreeKind;
var p1FourKind;
var p1FullHouse;
var p1smStraight;
var p1lgStraight;
var p1yahtzeeScore;
var p1grandTotal;
var totalScore = 0;
var p1Lower;

var arr2;
var p2ones;
var p2uptotal;
var p2lwTotal;
var p2bonus;
var p2Checkbox;
var scoresheet2;
var p2FullHouse;
var p2smStraight;
var p2lgStraight;
var p2yahtzeeScore;
var p2grandTotal;
var p2totalScore = 0;
var p2Lower;

document.addEventListener("DOMContentLoaded", function(e) {
  p1ones = document.getElementById("p1ones").value;
  p1uptotal = document.getElementById('p1total');
  p1uptotal2 = document.getElementById('p1uptotal2');
  p1lwTotal = document.getElementById("p1lwtotal");
  dice1 = document.getElementById("dice1");
  dice2 = document.getElementById("dice2");
  dice3 = document.getElementById("dice3");
  dice4 = document.getElementById("dice4");
  dice5 = document.getElementById("dice5");
  roll = document.getElementById("diceroll");
  diceboard = document.getElementById("diceboard");
  p1Checkbox = document.getElementById("p1bonus");
  yahtzeemsg = document.getElementById("yahtzeemsg");
  playerturn = document.getElementById("playerturn");
  scoreMsg = document.getElementById("score");
  reset = document.getElementById("reset");
  diceImg1 = document.getElementById("diceimg1");
  diceImg2 = document.getElementById("diceimg2");
  diceImg3 = document.getElementById("diceimg3");
  diceImg4 = document.getElementById("diceimg4");
  diceImg5 = document.getElementById("diceimg5");
  rollsLeft = document.getElementById("rollsleft");
  newGame = document.getElementById("newgame");

  arr = document.getElementsByClassName('p1totals');
  scoresheet1 = document.getElementById("scoresheet1");
  p1ThreeKind = document.getElementById("p1threekind");
  p1FourKind = document.getElementById("p1fourkind");
  p1FullHouse = document.getElementById("p1fullhouse");
  p1smStraight = document.getElementById("p1smstraight");
  p1lgStraight = document.getElementById("p1lgstraight");
  p1yahtzeeScore = document.getElementById("p1yahtzeescore");
  p1grandTotal= document.getElementById("p1grandtotal");
  p1Lower = document.getElementsByClassName("p1lower");

  arr2 = document.getElementsByClassName('p2totals');
  p2ones = document.getElementById("p2ones").value;
  p2uptotal = document.getElementById('p2total');
  p2uptotal2 = document.getElementById('p2uptotal2');
  p2lwTotal = document.getElementById("p2lwtotal");
  p2Checkbox = document.getElementById("p2bonus");
  p2FullHouse = document.getElementById("p2fullhouse");
  p2smStraight = document.getElementById("p2smstraight");
  p2lgStraight = document.getElementById("p2lgstraight");
  p2yahtzeeScore = document.getElementById("p2yahtzeescore");
  p2grandTotal= document.getElementById("p2grandtotal");
  p2Lower = document.getElementsByClassName("p2lower");

  newGame.onclick = function() {
    dice = {
      dice1: {value: 0, hold: false},
      dice2: {value: 0, hold: false},
      dice3: {value: 0, hold: false},
      dice4: {value: 0, hold: false},
      dice5: {value: 0, hold: false}
    }

    reset.disabled = false;
    roll.disabled = false;
    
    p1Turn = 13;
    p2Turn = 13;
    totalMoves = 26;

    turns = 3;
    scoreMsg.textContent = "";


    // p1ones = "";
    let p1tots = document.querySelectorAll('.p1totals')
    p1tots.forEach( p1tot => p1tot.value = 0)

    let p2tots = document.querySelectorAll('.p2totals')
    p2tots.forEach( p2tot => p2tot.value = 0)

    var boxes = document.querySelectorAll("input[type=checkbox]");
    boxes.forEach( box => box.checked = false)
    totalScore = 0;
    p1uptotal.textContent = "Total: 0"
    p1uptotal2.textContent = "Upper Total: 0";
    p1lwTotal.textContent = "Lower Total: 0";
    p1grandTotal.textContent = "Grand Total: 0"

    p2totalScore = 0;
    p2uptotal.textContent = "Total: 0";
    p2uptotal2.textContent = "Upper Total: 0";
    p2lwTotal.textContent = "Lower Total: 0";
    p2grandTotal.textContent = "Grand Total: 0";
    
    
  }

  for ( let el of arr) {
    el.addEventListener('change', findTotalPlayer1)
  }

  for ( let el of p1Lower) {
    el.addEventListener('change', findTotalPlayer1)
  }

  for ( let el of arr2) {
    el.addEventListener('change', findTotalPlayer2)
  }

  for ( let el of p2Lower) {
    el.addEventListener('change', findTotalPlayer2)
  }

  function rollDice() {
    if (turns > 0) {
      yahtzee();
      for (var die in dice) {
        console.log(dice[die]);
        if (!dice[die].hold) {
          dice[die].value = Math.ceil(Math.random() * 6);
        }
      }
      displayDice();
      // rollDieImgs();
      turns--;
      console.log(turns);
      rollsLeft.textContent = "Rolls Left: " + turns;
    } else if (turns == 1) {
      playerturn.textContent = "Next Players Turn!";
    } else if (turns == 0) {
      playerturn.textContent = "Next Players Turn!";
      turns = 3;
      rollsLeft.textContent = "Rolls Left: " + turns;
      resetDice();
    }
  }
  
  function displayDice() {
    dice1.src = "img/dice" + dice.dice1.value + ".png";
    dice2.src = "img/dice" + dice.dice2.value + ".png";
    dice3.src = "img/dice" + dice.dice3.value + ".png";
    dice4.src = "img/dice" + dice.dice4.value + ".png";
    dice5.src = "img/dice" + dice.dice5.value + ".png";
    if(dice.dice1.hold == true) {
      dice1.classList.add("holddie1");
    } else {
      dice1.classList.remove("holddie1");
    }
    if (dice.dice2.hold == true) {
      dice2.classList.add("holddie1");
    } else {
      dice2.classList.remove("holddie1");
    }
    if (dice.dice3.hold == true) {
      dice3.classList.add("holddie1");
    } else {
      dice3.classList.remove("holddie1");
    }
    if (dice.dice4.hold == true) {
      dice4.classList.add("holddie1");
    } else {
      dice4.classList.remove("holddie1");
    }
    if (dice.dice5.hold == true) {
      dice5.classList.add("holddie1");
    } else {
      dice5.classList.remove("holddie1");
    }
  }

  function checkWinning() {
    if(totalScore > p2totalScore) {
      scoreMsg.textContent = "Player 1 is Winning!";
    } else if(p2totalScore > totalScore) {
      scoreMsg.textContent = "Player 2 is Winning!";
    }
  }
  
  
  roll.onclick = function() {
    playerturn.textContent = "";
    rollDice();
    checkWinning();
  }
  
  reset.onclick = function() {
    resetDice();
  }
  
  diceboard.addEventListener("click", function(e) {
    dice[e.target.id].hold = !dice[e.target.id].hold
    displayDice();
  })
  
  function resetDice() {
    dice.dice1.value = 1;
    dice.dice2.value = 2;
    dice.dice3.value = 3;
    dice.dice4.value = 4;
    dice.dice5.value = 5;
    dice.dice1.hold = false;
    dice.dice2.hold = false;
    dice.dice3.hold = false;
    dice.dice4.hold = false;
    dice.dice5.hold = false;
    dice1.textContent = dice.dice1.value;
    dice2.textContent = dice.dice2.value;
    dice3.textContent = dice.dice3.value;
    dice4.textContent = dice.dice4.value;
    dice5.textContent = dice.dice5.value;
    turns = 3;
    rollsLeft.textContent = "Rolls Left: " + turns;
    playerturn.textContent = "Next Players Turn!";
    totalMoves--;
    console.log(totalMoves);
    displayDice();
    gameOver();
  }
  
  function yahtzee() {
    if (dice.dice1.value == dice.dice2.value  &&  dice.dice1.value == dice.dice3.value 
      &&  dice.dice1.value == dice.dice4.value &&  dice.dice1.value == dice.dice5.value) {
        console.log("Yahtzee");
      }
  }

  function findTotalPlayer1(){
  var upperTot=0;
  var finalUpperTot = 0;
  var bonus = 0;
  var full = 0;
  var small = 0;
  var large = 0;
  var yahtzeePoints = 0;
  var lowerTot = 0;
  var finalLowerTotal = 0;
  totalScore = 0;
    for(var i=0;i<arr.length;i++){
      upperTot += parseInt(arr[i].value * (i+1));
    }
    for(var i=0;i<p1Lower.length;i++){
      lowerTot += parseInt(p1Lower[i].value);
    }
      finalUpperTot = upperTot + bonus;
      finalLowerTotal = lowerTot + full + small + large + yahtzeePoints;
      p1uptotal.textContent = "Total: " + upperTot;
      p1uptotal2.textContent = "Upper Total: " + finalUpperTot;
      p1lwTotal.textContent = "Lower Total: " + finalLowerTotal;
      totalScore = finalUpperTot + finalLowerTotal;
      p1grandTotal.textContent = "Grand Total: " + totalScore;
    p1Checkbox.addEventListener("click", function(e) {
      if (p1Checkbox.checked === true) {
        bonus += 35;
      } else if (p1Checkbox.checked === false) {
        bonus -= 35;
      }
      finalUpperTot = upperTot + bonus;
      finalLowerTotal = lowerTot + full + small + large +yahtzeePoints;
      p1uptotal.textContent = "Total: " + upperTot;
      p1uptotal2.textContent = "Upper Total: " + finalUpperTot;
      p1lwTotal.textContent = "Lower Total: " + finalLowerTotal;
      totalScore = finalUpperTot + finalLowerTotal;
      p1grandTotal.textContent = "Grand Total: " + totalScore;
      checkWinning();
    })
    p1FullHouse.addEventListener("click", function(e) {
      if (p1FullHouse.checked === true) {
        full += 25;
      } else if (p1FullHouse.checked === false) {
        full -= 25;
      }
      finalUpperTot = upperTot + bonus;
      finalLowerTotal = lowerTot + full + small + large + yahtzeePoints;
      p1uptotal.textContent = "Total: " + upperTot;
      p1uptotal2.textContent = "Upper Total: " + finalUpperTot;
      p1lwTotal.textContent = "Lower Total: " + finalLowerTotal;
      totalScore = finalUpperTot + finalLowerTotal;
      p1grandTotal.textContent = "Grand Total: " + totalScore;
      checkWinning();
    })
    p1smStraight.addEventListener("click", function(e) {
      if (p1smStraight.checked === true) {
        small += 30;
      } else if (p1smStraight.checked === false) {
        small -= 30;
      }
      finalUpperTot = upperTot + bonus;
      finalLowerTotal = lowerTot + full + small + large + yahtzeePoints;
      p1uptotal.textContent = "Total: " + upperTot;
      p1uptotal2.textContent = "Upper Total: " + finalUpperTot;
      p1lwTotal.textContent = "Lower Total: " + finalLowerTotal;
      totalScore = finalUpperTot + finalLowerTotal;
      p1grandTotal.textContent = "Grand Total: " + totalScore;
      checkWinning();
  })
    p1lgStraight.addEventListener("click", function(e) {
      if (p1lgStraight.checked === true) {
        large += 40;
      } else if (p1lgStraight.checked === false) {
        large -= 40;
      }
      finalUpperTot = upperTot + bonus;
      finalLowerTotal = lowerTot + full + small + large + yahtzeePoints ;
      p1uptotal.textContent = "Total: " + upperTot;
      p1uptotal2.textContent = "Upper Total: " + finalUpperTot;
      p1lwTotal.textContent = "Lower Total: " + finalLowerTotal;
      totalScore = finalUpperTot + finalLowerTotal;
      p1grandTotal.textContent = "Grand Total: " + totalScore;
      checkWinning();
  })
    p1yahtzeeScore.addEventListener("click", function(e) {
      if (p1yahtzeeScore.checked === true) {
        yahtzeePoints += 50;
      } else if (p1yahtzeeScore.checked === false) {
        yahtzeePoints -= 50;
      }
      finalUpperTot = upperTot + bonus;
      finalLowerTotal = lowerTot + full + small + large + yahtzeePoints ;
      p1uptotal.textContent = "Total: " + upperTot;
      p1uptotal2.textContent = "Upper Total: " + finalUpperTot;
      p1lwTotal.textContent = "Lower Total: " + finalLowerTotal;
      totalScore = finalUpperTot + finalLowerTotal;
      p1grandTotal.textContent = "Grand Total: " + totalScore;
      checkWinning();
  })

  function checkWinning() {
    if(totalScore > p2totalScore) {
      scoreMsg.textContent = "Player 1 is Winning!";
    } else if(p2totalScore > totalScore) {
      scoreMsg.textContent = "Player 2 is Winning!";
    }
  }
  checkWinning();
}


  function findTotalPlayer2(){
    var p2upperTot=0;
    var p2finalUpperTot = 0;
    var p2bonus = 0;
    var p2full = 0;
    var p2small = 0;
    var p2large = 0;
    var p2yahtzeePoints = 0;
    var p2finalLowerTotal = 0;
    var p2lowerTot = 0;
    p2totalScore = 0;
      for(var i=0;i<arr2.length;i++){
        p2upperTot += parseInt(arr2[i].value * (i+1));
      }
      for(var i=0;i<p2Lower.length;i++){
        p2lowerTot += parseInt(p2Lower[i].value);
      }
        p2finalUpperTot = p2upperTot + p2bonus;
        p2finalLowerTotal = p2lowerTot + p2full + p2small + p2large + p2yahtzeePoints;
        p2uptotal.textContent = "Total: " + p2upperTot;
        p2uptotal2.textContent = "Upper Total: " + p2finalUpperTot;
        p2lwTotal.textContent = "Lower Total: " + p2finalLowerTotal;
        p2totalScore = p2finalUpperTot + p2finalLowerTotal;
        p2grandTotal.textContent = "Grand Total: " + p2totalScore;
        checkWinning();
      p2Checkbox.addEventListener("click", function(e) {
        if (p2Checkbox.checked === true) {
          p2bonus += 35;
        } else if (p2Checkbox.checked === false) {
          p2bonus -= 35;
        }
        p2finalUpperTot = p2upperTot + p2bonus;
        p2finalLowerTotal = p2full + p2small + p2large + p2yahtzeePoints;
        p2uptotal.textContent = "Total: " + p2upperTot;
        p2uptotal2.textContent = "Upper Total: " + p2finalUpperTot;
        p2lwTotal.textContent = "Lower Total: " + p2finalLowerTotal;
        p2totalScore = p2finalUpperTot + p2finalLowerTotal;
        p2grandTotal.textContent = "Grand Total: " + p2totalScore;
        checkWinning();
      })
      p2FullHouse.addEventListener("click", function(e) {
        if (p2FullHouse.checked === true) {
          p2full += 25;
        } else if (p2FullHouse.checked === false) {
          p2full -= 25;
        }
        p2finalUpperTot = p2upperTot + p2bonus;
        p2finalLowerTotal = p2full + p2small + p2large + p2yahtzeePoints;
        p2uptotal.textContent = "Total: " + p2upperTot;
        p2uptotal2.textContent = "Upper Total: " + p2finalUpperTot;
        p2lwTotal.textContent = "Lower Total: " + p2finalLowerTotal;
        p2totalScore = p2finalUpperTot + p2finalLowerTotal;
        p2grandTotal.textContent = "Grand Total: " + p2totalScore;
        checkWinning();
        
      })
      p2smStraight.addEventListener("click", function(e) {
        if (p2smStraight.checked === true) {
          p2small += 30;
        } else if (p2smStraight.checked === false) {
          p2small -= 30;
        }
        p2finalUpperTot = p2upperTot + p2bonus;
        p2finalLowerTotal = p2full + p2small + p2large + p2yahtzeePoints;
        p2uptotal.textContent = "Total: " + p2upperTot;
        p2uptotal2.textContent = "Upper Total: " + p2finalUpperTot;
        p2lwTotal.textContent = "Lower Total: " + p2finalLowerTotal;
        p2totalScore = p2finalUpperTot + p2finalLowerTotal;
        p2grandTotal.textContent = "Grand Total: " + p2totalScore;
        checkWinning();
    })
      p2lgStraight.addEventListener("click", function(e) {
        if (p2lgStraight.checked === true) {
          p2large += 40;
        } else if (p2lgStraight.checked === false) {
          p2large -= 40;
        }
        p2finalUpperTot = p2upperTot + p2bonus;
        p2finalLowerTotal = p2full + p2small + p2large + p2yahtzeePoints ;
        p2uptotal.textContent = "Total: " + p2upperTot;
        p2uptotal2.textContent = "Upper Total: " + p2finalUpperTot;
        p2lwTotal.textContent = "Lower Total: " + p2finalLowerTotal;
        p2totalScore = p2finalUpperTot + p2finalLowerTotal;
        p2grandTotal.textContent = "Grand Total: " + p2totalScore;
        checkWinning();
    })
      p2yahtzeeScore.addEventListener("click", function(e) {
        if (p2yahtzeeScore.checked === true) {
          p2yahtzeePoints += 50;
        } else if (p2yahtzeeScore.checked === false) {
          p2yahtzeePoints -= 50;
        }
        p2finalUpperTot = p2upperTot + p2bonus;
        p2finalLowerTotal = p2full + p2small + p2large + p2yahtzeePoints ;
        p2uptotal.textContent = "Total: " + p2upperTot;
        p2uptotal2.textContent = "Upper Total: " + p2finalUpperTot;
        p2lwTotal.textContent = "Lower Total: " + p2finalLowerTotal;
        p2totalScore = p2finalUpperTot + p2finalLowerTotal;
        p2grandTotal.textContent = "Grand Total: " + p2totalScore;
        checkWinning();
    })
    console.log(totalScore);
    console.log(p2totalScore);
  
  function checkWinning() {
    if(totalScore > p2totalScore) {
      scoreMsg.textContent = "Player 1 is Winning!";
    } else if(p2totalScore > totalScore) {
      scoreMsg.textContent = "Player 2 is Winning!";
    }
  }
  checkWinning();
}

  function rollDieImgs() {
    randomDie1 = Math.ceil(Math.random() * 6);
    randomDie2 = Math.ceil(Math.random() * 6);
    randomDie3 = Math.ceil(Math.random() * 6);
    randomDie4 = Math.ceil(Math.random() * 6);
    randomDie5 = Math.ceil(Math.random() * 6);
    var i =0;
    while (i < 6){
      setTimeout(function() {
        dice1.src = "img/dice" + randomDie1 + ".png";
        dice2.src = "img/dice" + randomDie2 + ".png";
        dice3.src = "img/dice" + randomDie3 + ".png";
        dice4.src = "img/dice" + randomDie4 + ".png";
        dice5.src = "img/dice" + randomDie5 + ".png";
      }, 500)
      i++;
    }
  }

  function gameOver() {
    if (totalMoves === 0) {
      if(totalScore > p2totalScore) {
        scoreMsg.textContent = "Player 1 is the Winner!";
      } else if(p2totalScore > totalScore) {
        scoreMsg.textContent = "Player 2 is the Winner!";
      }
      reset.disabled = true;
      roll.disabled = true;
      newGame.style.display = "inline";
      playerturn.textContent = "";


    }
  }



    // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("mybtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

})
