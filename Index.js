document.querySelector(".img1").src="images/dice6.png";
document.querySelector(".img2").src="images/dice6.png";

var random=Math.floor(Math.random()*6+1);
document.querySelector(".img1").setAttribute("src","images/dice"+random+".png");
var random2=Math.floor(Math.random()*6+1);
document.querySelector(".img2").setAttribute("src","images/dice"+random2+".png");


if(random>random2){
    document.querySelector("h1").innerHTML="🤠Player 1 Won"
}
else if(random2>random){
    document.querySelector("h1").innerHTML="🤠Player 2 Won"
}

else{
    document.querySelector("h1").innerHTML="🏴󠁧󠁢󠁷󠁬󠁳󠁿Draw😎😎"
}