function myFunc() {
  console.log(this);
}

const myObject = { name: "My Object" };

// Explicit binding of this using bind
const boundFunc = myFunc.bind(myObject);

boundFunc(); // this will correctly print { name: "My Object" }

//Alternatively, using call or apply
myFunc.call(myObject); // this will also print { name: "My Object" }