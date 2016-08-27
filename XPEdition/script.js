var bliss = new Image();
var dlg = new Image();
var varDelay = 1000;
bliss.src = "bliss.jpg";
dlg.src = "help.png";


var c = document.getElementById("xp");
var ctx = c.getContext("2d");
ctx.drawImage(bliss,0,0);

var varInter = setInterval(addPopup,varDelay);
var varInterB = setInterval(updateDaDelay,2000);

function addPopup() {
var a = Math.floor(Math.random() * 800);
var b = Math.floor(Math.random() * 600);

ctx.drawImage(dlg,a,b);
};

function updateDaDelay() {
if (varDelay > 0) {
varDelay = varDelay - 4;
varInter = setInterval(addPopup,varDelay);
}
};
