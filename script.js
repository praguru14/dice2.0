
var randnum1 = Math.floor(Math.random()*6) +1;
var randnum2 = Math.floor(Math.random()*6) +1;
console.log(randnum2);
console.log(randnum1);
var num1 = document.getElementsByClassName("img1")[0].setAttribute("src","images/dice" +randnum1+".png");
var num2 = document.getElementsByClassName("img2")[0].setAttribute("src","images/dice" +randnum2+".png");

if(randnum1>randnum2){
    document.querySelector("h1").innerHTML="Player1 विजयी भाव ";
}
else if (randnum2>randnum1){
    document.querySelector("h1").innerHTML="Player2 विजयी भाव ";
}
else{
    document.querySelector("h1").innerHTML="दोनों विजयी भाव ";
}

