function verifyLogin() {

if (document.getElementById("username").value == "cookiebake" && document.getElementById("password").value == "bakesale!") {
loginA();
};

if (document.getElementById("username").value == "getaban02" && document.getElementById("password").value == "banjob") {
document.getElementById("msg").innerHTML = "You're banned by Mint for : Annoying people.";
};

if (document.getElementById("username").value == "guest") {
document.getElementById("msg").innerHTML = "guest is already logged.";
};

if (document.getElementById("username").value == "custom message") {
document.getElementById("msg").innerHTML = document.getElementById("password").value;
};

if (document.getElementById("username").value == "Mint" && document.getElementById("password").value == "mustneedsomemint") {
document.getElementById("msg").innerHTML = "You're banned by Mint for : I hate E-Mint.";
};

if (document.getElementById("username").value == "Hackzz" && document.getElementById("password").value == "hackinglife....") {
document.getElementById("msg").innerHTML = "Are you sure to be only one hacker on this social network?";
fakeHack();
};

if (document.getElementById("username").value == "register") {
window.location = "help.html";
};

function loginA() {
alert("Hello cookiebake, what new cookie recipe you will send?");
document.getElementById("msg").innerHTML = "Login refused! (> 5600 Cookie recipes)";
};

function fakeHack() {
setTimeout(function() {document.getElementById("username").value = "I'll hack you!";},2000);
setTimeout(function() {document.getElementById("password").value = "Nevermind. It's useless.";},5000);
setTimeout(function() {document.getElementById("msg").innerHTML = "Don't login back!";},8000);
};
};
