var x;
function varFunction() {
  var x = "111";
  if(true) {
    var x = "999";
  }
  console.log(x);
}
varFunction();
console.log(x);

