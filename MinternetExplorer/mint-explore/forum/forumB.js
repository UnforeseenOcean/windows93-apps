var likes = 1;

setInterval(function() {document.write("<p class='topic'>Gueqst sayyy :: FPZàÀ0à@[|$$$*%Ùùù<br><br>Warning : corrupted answer</p>");},2500);
setInterval(addlike,100);
setInterval(sublike,240);
setInterval(glitchlike,900);
setInterval(hypersublike,2000);

function addlike() {
likes = likes + 49342;
document.getElementById("likesCount").innerHTML = likes;
};

function sublike() {
likes = likes - 32996;
document.getElementById("likesCount").innerHTML = likes;
};

function glitchlike() {
document.getElementById("likesCount").innerHTML = "UNDEFINED";
};

function hypersublike() {
likes = likes - 12405603;
document.getElementById("likesCount").innerHTML = likes;
};
