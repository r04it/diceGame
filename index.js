var img1=Math.floor(Math.random()*6)+1;
var img2=Math.floor(Math.random()*6)+1;

if (img1>img2){
    document.querySelector("#winner1").style.visibility="visible";
}else if (img1<img2){
    document.querySelector("#winner2").style.visibility="visible";
}else{
    document.querySelector("#winner1").innerHTML="😃Draw😃";
    document.querySelector("#winner2").innerHTML="😃Draw😃";
    document.getElementById("winner1").style.visibility="visible";
    document.getElementById("winner2").style.visibility="visible";
}
img1="img/dice"+img1+".png";
img2="img/dice"+img2+".png";

document.querySelector("#player1").src=img1;
document.querySelector("#player2").src=img2;

