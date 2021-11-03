setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("div1").innerHTML=
  "Current Time : "+
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}
