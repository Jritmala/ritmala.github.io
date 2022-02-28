/* Poista listalta tehtävä */

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

/* Fuktio lisäämään uusi tehtävä listalle */

function myFunction() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("listInput").value;
    var added = document.createTextNode(inputValue);
    li.appendChild(added);
    if (inputValue === '') {
      alert("Add things to do!");
    } else {
      document.getElementById("toDoList").appendChild(li);
    }
    document.getElementById("listInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}
