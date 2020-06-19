import { Animal, Cat } from "./animal.js"

let cat = Cat('feline', 4);

// reset the value
cat.legs = 3;

console.log(cat.type);
console.log(cat.legs);

console.log(Animal.return10());

console.log(cat.metaData);

cat.makeNoise();