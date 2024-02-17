/*VARIAVEIS-------------------------------------------------------------------*/

/*animacao rodar*/
var buttonRodar = document.getElementById("buttonRodar");
var buttonRodarParar = document.getElementById("buttonRodarParar");
var boxRodar = document.getElementById("boxRodar");

/*animacao up down*/
var buttonUpdown = document.getElementById("buttonUpdown");
var buttonUpdownParar = document.getElementById("buttonUpdownParar");
var boxUpdown = document.getElementById("boxUpdown");

/*animacao left*/
var buttonLeft = document.getElementById("buttonLeft");
var buttonLeftParar = document.getElementById("buttonLeftParar");
var boxLeft = document.getElementById("boxLeft");

/*animacao white black*/
var buttonWhiteblack = document.getElementById("buttonWhiteblack");
var buttonWhiteblackParar = document.getElementById("buttonWhiteblackParar");
var boxWhiteblack = document.getElementById("boxWhiteblack");

/*animacao opacity*/
var buttonOpacity = document.getElementById("buttonOpacity");
var buttonOpacityParar = document.getElementById("buttonOpacityParar");
var boxOpacity = document.getElementById("boxOpacity");

/*animacao wiggle*/
var buttonWiggle = document.getElementById("buttonWiggle");
var buttonWiggleParar = document.getElementById("buttonWiggleParar");
var boxWiggle = document.getElementById("boxWiggle");


/*buttons animacao rodar-------------------------*/
	buttonRodar.addEventListener ("click", function() 
	{
		boxRodar.style.animation = 'rodar 5s linear infinite';
	});
	buttonRodarParar.addEventListener ("click", function() 
	{
		boxRodar.style.animation = '';
	});


/*buttons animacao up down------------------------*/
	buttonUpdown.addEventListener ("click", function() 
	{
		boxUpdown.style.animation = 'updown 8s linear infinite';
	});
	buttonUpdownParar.addEventListener ("click", function() 
	{
		boxUpdown.style.animation = '';
	});


/*buttons animacao left--------------------------*/
	buttonLeft.addEventListener ("click", function() 
	{
		boxLeft.style.animation = 'left 5s linear infinite';
	});
	buttonLeftParar.addEventListener ("click", function() 
	{
		boxLeft.style.animation = '';
	});


/*buttons animacao white black---------------------*/
	buttonWhiteblack.addEventListener ("click", function() 
	{
		boxWhiteblack.style.animation = 'whiteblack 4s cubic-bezier(0.05, 0.35, 0.77, 1.08) infinite';
	});
	buttonWhiteblackParar.addEventListener ("click", function() 
	{
		boxWhiteblack.style.animation = '';
	});


/*buttons animacao opacity-----------------------*/
	buttonOpacity.addEventListener ("click", function() 
	{
		boxOpacity.style.animation = 'opacity 2s linear infinite';
	});
	buttonOpacityParar.addEventListener ("click", function() 
	{
		boxOpacity.style.animation = '';
	});

/*buttons animacao wiggle-----------------------*/
	buttonWiggle.addEventListener ("click", function() 
	{
		boxWiggle.style.animation = 'wiggle 2s linear infinite';
	});
	buttonWiggleParar.addEventListener ("click", function() 
	{
		boxWiggle.style.animation = '';
	});

