randomone=Math.floor(Math.random()*6)+1;
console.log("playe1  "+randomone);
randomtwo=Math.floor(Math.random()*6)+1;
console.log("playe2  "+randomtwo);
document.querySelector('.img1').setAttribute('src','images/dice'+randomone+'.png');
document.querySelector('.img2').setAttribute('src','images/dice'+randomtwo+'.png');

if(randomone==randomtwo)
{
    document.querySelector('h1').innerHTML='DRAW!';
}
else if(randomone>randomtwo)
{
    document.querySelector('h1').innerHTML='Player1 wins!';
}
else{
    document.querySelector('h1').innerHTML='Player2 wins!';
}