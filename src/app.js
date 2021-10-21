/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var sujeto = ["Mi perro", "Mi abuela", "Mi tortuga", "Mi pájaro"];
  var verbo = ["comió", "orinó", "aplastó", "rompió"];
  var cosa = ["mi tarea", "las llaves", "el auto"];
  var lugar = ["antes de la clase", "cuando almorzaba", "mientras oraba"];

  var stc1 = Math.floor(Math.random() * sujeto.length);
  var stc2 = Math.floor(Math.random() * verbo.length);
  var stc3 = Math.floor(Math.random() * cosa.length);
  var stc4 = Math.floor(Math.random() * lugar.length);

  document.querySelector("#excusa").innerHTML =
    sujeto[stc1] + " " + verbo[stc2] + " " + cosa[stc3] + " " + lugar[stc4];
};
