var money = 5;
var dayCur = 1;
var joyness = 3;
var hourCur = 0;

function workingDay() {
document.getElementById("currentMsg").innerHTML = "You do 4 hours of work. You earned 0.5$";
hourCur = hourCur + 4;
money = money + 0.5;
joyness = joyness - 1;
refreshJob();
};

function hardWork() {
document.getElementById("currentMsg").innerHTML = "You worked hard today! You earned 7$";
dayCur = dayCur + 1;
joyness = joyness - 3;
money = money + 7;
refreshJob();
};

function breakTime() {
document.getElementById("currentMsg").innerHTML = "You stay at house today...";
dayCur = dayCur + 1;
joyness = joyness + 1;
refreshJob();
};

function refreshJob() {
alert("Money : "+money+". Day : "+dayCur+". Joyness :"+joyness);

if (hourCur >= 16) {
dayCur = dayCur + 1;
};

if (dayCur == 15) {
jobConclusion();
};

};

function jobConclusion() {
if (money >= 21 && joyness > 2) {
document.getElementById("conclusion").innerHTML = "You won!";
document.getElementById("conclusionB").innerHTML = "You have enought money and joyness for go to the party tonight!";
} else {
document.getElementById("conclusion").innerHTML = "You lose.";
}
};



