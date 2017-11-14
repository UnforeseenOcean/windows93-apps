function startGen() {
  var te = prompt("Enter the number of functions :");
  var le = prompt("Enter the number of lines per functions :");
  var tmp;
  var tmpB;
  
  var i;
  var j;
  
  var t = parseInt(te);
  var l = parseInt(le);
  
  for (var i = 1; i < (t + 1); i++) {
    tmp = "func" + i.toString();
    document.write("function "+tmp+"() {<br>");
    
    for (var j = 1; j < (l + 1); j++) {
      tmpB = Math.floor((Math.random() * 5) + 1);
      
      if (tmpB == 1) {
        document.write("alert(\"" + tmp + " is active\");<br>");
      }
      
      if (tmpB == 2) {
       document.write("var v" + i + " = " + Math.floor(Math.random() * 100) + ";<br>");
      }
      
      if (tmpB == 3) {
        document.write("alert(\"Randomized\");<br>");
      }
      
      if (tmpB == 4) {
        document.write("document.write(" + tmp + ");<br>");
      }
      
      if (tmpB == 5) {
        document.write("document.write(\"OH BOI\");<br>");
      }
      
  }
    document.write("func" + Math.floor((Math.random() * t) + 1) + "();<br>}<br><br>");
}

}
