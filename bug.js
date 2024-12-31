function myFunc() {
  console.log(this);
}

myFunc(); // this will print the global object (window in browsers, undefined in strict mode)