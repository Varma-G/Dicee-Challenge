
// player1 section
var randomNumber1 = Math.floor(Math.random()*6)+1;
var diceimage1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",diceimage1);


// player2 section


var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceimage2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",diceimage2);


// comparing section

if(randomNumber1 > randomNumber2)
{
  document.querySelector('h1').innerHTML="🚩Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector('h1').innerHTML="Player 2 Wins!🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
