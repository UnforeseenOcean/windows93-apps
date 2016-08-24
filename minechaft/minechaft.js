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
var hungerForce = 1;

setInterval(hungerNow,9000);
setInterval(spawnEnnemy,10000);
setInterval(verifyXP,1000);

//Use sword
function attackBlock() {

if (ennemy == 1) {
document.getElementById("infos").innerHTML = "You attacked the ennemy. You earned 1 food and 25 XP";
xp = xp + 25;
steps = steps + 1;
block = 1;
ennemy = 0;
money = money + 2;
food = food + 1;

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
document.write("<h1>Dead!</h1>");
document.write("Dead of starving!");
}
};

//use Pickaxe
function mineBlock() {

if (block == 1) {
document.getElementById("infos").innerHTML = "You mined. You earned 1 stone and 5 XPs";
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

if (hunger > 10) {
hunger = 10;
}
};

//verify XPs for level up
function verifyXP() {

if (xp > 1000) {
level = level + 1;
hungerForce = hungerForce + 0.15;
document.getElementById("infos").innerHTML = "Level Up! You're level"+level+" now!";
document.getElementById("level").innerHTML = "Level "+level;
xp = xp - 1000;
}
};

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
alert("WIP");
};

function shopC() {

if (money >= 100) {
document.getElementById("infos").innerHTML = "Food SUpply Bought!";
money = money - 100;
food = food + 75;
document.getElementById("money").innerHTML = "Money : "+money+"$";
} else {
alert("You don't have enought money for buy this item.");
}
};
