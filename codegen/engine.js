function startGen() {
  var t = prompt("Enter the number of functions :");
  var l = prompt("Enter the number of lines per functions :");
  var tmp;
  var tmpB;
  
  for (var i = 0; i == t; i++) {
    tmp = "func" + i;
    document.write("function "+tmp+"() {<br>");
    
    for (var j = 0; j == l; j++) {
      tmpB = Math.floor((Math.random() * 5) + 1);
      
      if (tmpB == 1) {
        document.write("alert(\"" + tmp + " is active\";<br>");
      }
      
      if (tmpB == 2) {
       document.write("var v" + i + " = " + Math.floor(Math.random() * 100) + ";");
      }
      
      if (tmpB == 3) {
        document.write("alert(\"Randomized\");<br>");
      }
      
      if (tmpB == 4) {
        document.write("document.write(" + tmp + ");<br>");
      }
      
      if (tmpB == 5) {
        document.write("document.write(\"<h1>OH BOI</h1>\");<br>");
      }
      document.write("func" + Math.floor((Math.random() * 5) + 1 + "();<br>}<br><br>");
  }
}
     
                     }
