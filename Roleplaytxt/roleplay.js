//Story code

function endDatStroy() {
document.write("<h1>The End!</h1>");
var a = "";
var b = "";
};

function StartTheStory() {
document.write("<script src='roleplay.js'></script>");
document.write("<h3>You're sleppy. It's 12 : 04 PM</h3>");
var b = prompt("Go to bed? [Y/N] (if you don't answer Y or N, Y will be automatically choosen.)");

if (b == "N") {
document.write("<h3>You're sleepy for a long time ago. You too tired for live. You're dead.</h3>");
endDatStroy();

} else {
document.write("<h3>You go to the bed...And now?</h3>");
document.write("<h4><button onClick='chAleave()'>Leave the bed now.</button><button onClick='chAstay()'>Stay and wait to leave the bed at 8 AM</button></h4>");
}
var b = "";
};

function chAleave() {
var b = prompt("Stay in the bed, dude. You'll be dead if you don't sleep anymore. Stay? [Y/N]");

if (b == "Y") {
document.write("<h3>You stay... Choose 'Stay and wait to leave the bad at 8 AM for continue.</h3>");
} else {
document.write("<h3>You're dead for sleepiness.</h3>");
endDatStroy();
}
var b = "";
};

function chAstay() {
document.write("<h6>You sleep...</h6>");
document.write("<h4><button onClick='continueA()'>Continue</h4>");
};

function continueA() {
document.write("<p>It's 8 AM. You get up.<p>");
setTimeout(continueA2,2000);
};

function continueB() {
document.write("<h3>It's your friend<br>");
document.write("You say What's up and how are you ?</h3>");
document.write("<p>Brandon : I'm fine. Do you want come at a party ?</p>");
document.write("<p>You : ");
var b = prompt("Come ? [Y/N]");

if (b == "Y") {
document.write("Sure! Why not?</p>");
document.write("<p>Brandon : Okay! It costs 21$. I know... It's cost so much... The leader says 'the party will be so cool!</p>");
document.write("<h4><button onClick='continueC1()>Continue.</button></h4>");
} else {
document.write("I can't, i need to work right now. I bought too much weed (xD)...</p>");
document.write("<p>Brandon : Don't worry, the party is in 15 days. You have time to get some money. Cya!</p>");
document.write("<h4><button onClick='continueC2()'>Continue.</button></h4>");
}
};

function continueA2() {
alert("Knock Knock...");
var b = prompt("Open? [Y/N]");

if (b == "Y") {
document.write("<p>You'll open the door...</p>");
document.write("<h4><button onClick='continueB()'>Continue</button></h4>");
} else {
document.write("<p>You decided to don't open...</p>");
setTimeout(function() {alert("You have nothing to do...")},2000);
endDatStroy();
}
};

function continueC1() {
alert("(!) You can't come at the party. You have 5$!");
alert("You bought too much Weed (xD)");
endDatStroy();
document.write("<h6>RIP in peperoni. Gilbert 1992 - 20XX</h6>");
};

function continueC2() {
alert("Let's start your job!");
window.location = "job.html";
};

