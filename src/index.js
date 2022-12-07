import "./styles.css";
var upperbody = document.getElementById("app");
var lowerdiv = document.getElementById("inner");
var mainbody = document.getElementById("body");

var toggle = false;
lowerdiv.addEventListener("click", function (event) {
  if (!toggle) {
    mainbody.style = "background-color:black; color:white; transition:1s ;";
    lowerdiv.style = "float:right;";
    toggle = !toggle;
  } else {
    mainbody.style = "background-color:white; transition:1s;";
    lowerdiv.style = "float:left;";
    toggle = !toggle;
  }
});
