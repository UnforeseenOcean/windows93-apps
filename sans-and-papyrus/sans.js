setTimeout(function() {document.getElementById("sText").innerHTML += "Heya!<br>";},1000);
setTimeout(function() {document.getElementById("sText").innerHTML += "You remember me?<br>";},3100);
setTimeout(function() {document.getElementById("sText").innerHTML += "I'm your friend! <span class=a>SANS!</span><br>";},5000);

function actAA() {
document.getElementById("text").innerHTML = "You can't remember him.";
setTimeout(function() {
document.getElementById("sText").innerHTML = "You don't remember me? I'm <span class=a>Sans</span>...<br>";
document.getElementById("act").innerHTML = '<img src="ACT.png" onClick="actAB()" ><span id="cA">I remember now.</span><br><img src="ACT.png" onClick="getOut()" ><span id="cB">Nope. (Flee)<br>';
},1500);
};

function actAB() {
document.getElementById("text").innerHTML = "You're remember it. It's Sans your friend. The cool skeleton!<br>";
setTimeout(function() {
document.getElementById("sText").innerHTML = "You remember me now?<br>";
},1500);
setTimeout(function() {
document.getElementById("sText").innerHTML += "This is great! And you remember <span class=a>PAPYRUS</span>?";
document.getElementById("act").innerHTML = '<img src="ACT.png" onClick="getOut()" ><span id="cA">No. (Flee)</span><br><img src="ACT.png" onClick="actB()" ><span id="cB">Oh yes! The great <span class="a">Papyrus</span>!</span><br>';},3000);
};

function getOut() {
document.write("You get out");
};

function actB() {
document.getElementById("sText").innerHTML = "Papyrus... My bro...";
document.getElementById("sText").innerHTML = "How <span class=a>COOL</span> he's ?";
document.getElementById("text").innerHTML = "<span class=a>Papyrus</span> is here. He don't hear anything about him...";
document.getElementById("act").innerHTML = "You must to let Papyrus come...";
setTimeout(function() {document.getElementById("char").innerHTML = "<img src=papyrus.png>";
document.getElementById("sText").innerHTML = "Hello human.";
document.getElementById("text").innerHTML = "PAPYRUS IS HERE.";
document.getElementById("act").innerHTML = "<img onClick=actC() src=ACT.png>Hello.";},4000);
};

function actC() {
document.getElementById("text").innerHTML = "Frisk : Hello Papyrus, i'm Frisk. Your friend!<br>Remember. I like your spaghettis!";
setTimeout(function() {document.getElementById("sText").innerHTML = "I remember you! Want some spaghetti!";
document.getElementById("act").innerHTML = "You say Yes! And this is the end.";},1000);
}
