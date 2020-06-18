let [firstName] = ["Amy", "Charlotte", "Taegan"];
console.log(firstName);  //Amy

let [firstName, secondName] = ["Amy", "Charlotte", "Taegan"];
console.log(firstName + secondName); //Amy Charlotte

//thirdName is storing a reference to index 0
//this can be overwritten by assigning a new value to it
let [firstName, secondName, thirdName] = ["Amy", "Charlotte", "Taegan"];
thirdName = "Liam";
console.log(thirdName); //Liam
