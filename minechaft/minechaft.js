var hunger = 10;
var steps = 0;
var stone = 0;
var food = 0;
var ennemy = 0;
var block = 1;
var xp = 0;
var level = 1;
var money = 0;
var mineForce = 1;
var stepForce = 1;
var hungerForce = 0;
var foodForce = 1;
var hungerLevel = 10;
var moneypersec = 0;

setInterval(hungerNow,9000);
setInterval(spawnEnnemy,10000);
setInterval(verifyXP,1000);

//Use sword
function attackBlock() {

if (ennemy == 1) {
document.getElementById("infos").innerHTML = "You attacked the ennemy.";
xp = xp + 25;
steps = steps + 1;
block = 1;
ennemy = 0;
money = money + 2;
food = food + foodForce;

document.getElementById("xp").innerHTML = "XPs : "+xp;
document.getElementById("steps").innerHTML = "Steps : "+steps;
document.getElementById("food").innerHTML = "Food : "+food;
document.getElementById("money").innerHTML = "Money : "+money+"$";

} else {
document.getElementById("infos").innerHTML = "You attacked nothing.";
}
};

//Refresh Hunger Bar
function hungerNow() {
hunger = hunger - hungerForce;
document.getElementById("hunger").innerHTML = "Hunger : "+hunger;

if (hunger < 4) {
document.getElementById("infos").innerHTML = "You're starving.";
};

if (hunger <= 0) {
alert("You are dead!");
document.write("Refresh for replay.<br>");
document.write("<h1>FINAL SCORE</h1>");
document.write("<br>Money : "+money);
document.write("<br>Stone : "+stone);
document.write("<br>Level : "+level);
}
};

//use Pickaxe
function mineBlock() {

if (block == 1) {
document.getElementById("infos").innerHTML = "You mined.";
money = money + 0.5
xp = xp + 5;
stone = stone + mineForce;
steps = steps + stepForce;

document.getElementById("xp").innerHTML = "XPs : "+xp;
document.getElementById("stone").innerHTML = "Stone : "+stone;
document.getElementById("steps").innerHTML = "Steps : "+steps;
document.getElementById("money").innerHTML = "Money : "+money+"$";
} else {
document.getElementById("infos").innerHTML = "You're mining nothing.";
}
};

//spawn Ennemy
function spawnEnnemy() {
ennemy = 1;
block = 0;

document.getElementById("infos").innerHTML = "You encounter an ennemy!";
};

//eat Food
function eatFood() {
if (food > 0) {
document.getElementById("infos").innerHTML = "You eat something";
food = food - 1;
hunger = hunger + 1;

document.getElementById("hunger").innerHTML = "Hunger : "+hunger;
document.getElementById("food").innerHTML = "Food : "+food;
} else {
document.getElementById("infos").innerHTML = "You have nothing to eat.";
};

if (hunger > hungerLevel) {
hunger = hungerLevel;
}
};

//verify XPs for level up
function verifyXP() {

if (xp > 1000) {
level = level + 1;
hungerForce = hungerForce + 0.15;
hungerLevel = hungerLevel + 2;
document.getElementById("infos").innerHTML = "Level Up! You're level"+level+" now!";
document.getElementById("level").innerHTML = "Level "+level;
xp = xp - 1000;
}
};

function Glitchy() {
	food = Math.random() * 6;
	level = level + food;
	hungerForce = hungerForce + 1;
}

//Minechaft Shop Functions

//Stone Powerup

function shopA() {

if (money >= 200) {
document.getElementById("infos").innerHTML = "Stone Powerup Bought!";
money = money - 200;
mineForce = mineForce + 1;
document.getElementById("money").innerHTML = "Money : "+money+"$";
setTimeout(function() {mineForce = mineForce - 1;},60000);
} else {
alert("You don't have enought money for buy this item.");
}
};


//Super Speed

function shopB() {

if (stone >= 1200) {
	document.getElementById("infos").innerHTML = "Super Speed bought!";
	stone = stone - 1200;
	stepForce = stepForce + 5;
} else {
	alert("You don't have enough money to buy this item.")
}
};

function shopC() {

if (money >= 100) {
document.getElementById("infos").innerHTML = "Food Supply Bought!";
money = money - 100;
food = food + 75;
document.getElementById("money").innerHTML = "Money : "+money+"$";
document.getElementById("food").innerHTML = "Food : "+food;
} else {
alert("You don't have enough money to buy this item.");
}
};

//Life Stone Powerup

function shopD() {
	
	if (money >= 350) {
		document.getElementById("infos").innerHTML = "Life Stone Powerup Bought!";
		money = money - 350;
		mineForce = mineForce + 1;
		document.getElementById("money").innerHTML = "Money : "+money+"$";
	}  else {
		alert("You don't have enought money to buy this item.");
	}
};

//Extra-Meat Sword

function shopE() {
	
	if (money >= 210) {
		document.getElementById("infos").innerHTML = "Extra-Meat Sword Bought!";
		money = money - 210;
		document.getElementById("money").innerHTML = "Money : "+money+"$";
		foodForce = foodForce + 1;
	}
};

//

function shopF() {
	if (money >= 530) {
		money = money - 550;
		document.getElementById("money").innerHTML = "Money : "+money+"$";
		document.getElementById("infos").innerHTML = "Auto-Eat Bought!";
		setInterval(function() {if (hunger < 9) {hunger = hungerLevel; document.getElementById("hunger").innerHTML = "Hunger : "+hunger;}},100);
	} else {
		alert("You don't have enought money!");
	}
};

function shopG() {
	if (money >= 5000) {
		money = money - 5000;
		alert("I take your money. But you have nothing! xD!!!")
	} else {
		alert("You don't have enought money for buy this item!");
	}
};

function shopH() {
	if (stone >= 500) {
		setInterval(addMoney,1000);
		stone = stone - 500;
		document.getElementById("stone").innerHTML = "Stone : "+stone;
		document.getElementById("infos").innerHTML = "Salary Bought!"
		moneypersec = moneypersec + 2;
		document.getElementById("mps").innerHTML = "Money/s : "+moneypersec;
	} else {
		alert("You don't have enought money for buy this item.");
	}
};

function shopI() {
		alert("It'll make your life a hell");
		setInterval(Glitchy,1000);
};

//Salary Function

function addMoney() {
	money = money + 2;
	document.getElementById("money").innerHTML = "Money : "+money+"$";
};
