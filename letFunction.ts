function letFunction() {
  let x = "111";
  if (true) {
    let x = "999";
  }
  console.log(x);
}
letFunction();