//ASCII Beat Maker by PeanutFish
//Copyright (C) PeanutFish 2016. All rights reserved.

//add a note
var playVar;
var curBeat = 0;

var KickS = new Howl({
  src: ["snare.wav"],
  pitch: 0.2
});
var SnareS = new Howl({
src: ["snare.wav"]
});

function addNote() {
var a = prompt("Which instrument ?\n1 - Snare Drum\n2 - Kick Drum");
var b = prompt("Note position (between 1 and 6)");

var c = parseInt(a);
var b = parseInt(b);

if (c == 1) {
var e = "Snare";
}

if (c == 2) {
var e = "Kick";
}

var note = document.getElementById(e + b);
note.innerHTML = "1";
}

//delete a note
function delNote() {
var a = prompt("Which instrument ?\n1 - Snare Drum\n2 - Kick Drum");
var b = prompt("Note position (between 1 and 6)");

var c = parseInt(a);
var b = parseInt(b);

if (c == 1) {
var e = "Snare";
}

if (c == 2) {
var e = "Kick";
}

var note = document.getElementById(e + b);
note.innerHTML = "0";
}

//play the music
function playMus() {
playVar = setInterval(readMus,250);
}

//stop the music
function stopMus() {
curBeat = 0;
clearInterval(playVar);
}

//Music reading system
function readMus() {
if (curBeat == 6) {
curBeat = 0;
}

curBeat = curBeat + 1;

if (document.getElementById("Snare"+curBeat).innerHTML == "1") {
SnareS.play();
}

if (document.getElementById("Kick"+curBeat).innerHTML == "1") {
KickS.play();
}
}
