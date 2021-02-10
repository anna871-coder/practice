//1. feladat:
//Hozzunk létre egy objektumot, ezen belül legyen minden primitívből egy kulcshoz kapcsolódó szám, string, boolen, tömb, újabb object,
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
//For ciklussal fussunk végig az összes object key-en,
//if else-zel egy tömböt kapunk vissza, ha ez egy objektum, akkor írja ki, hogy objektum, ha nem objektum, írja ki, hogy nem objektum

const myObject = {
  string: "string",
  number: 1,
  boolen: true,
  array: [1, 2, 3, 4, 5, 6],
  objectObject: {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
  },
};
/* console.log(myObject);

let objectArray = Object.keys(myObject);
console.log(objectArray); */
/* let myArray = []; */
/* function investigationObject(obj) {
  for (let value of Object.values(obj)) {
    if (typeof value === "object") {
      console.log("this is an object");
    } else {
      console.log("Not an object");
    }
  }
}
investigationObject(myObject); */

const pageLoad = () => {
  for (const prop in myObject) {
    let isThat = "";
    switch (typeof myObject[prop]) {
      case "object":
        isThat = "objektum";
        break;
      default:
        isThat = "nem objektum";
    }
    console.log(isThat);
  }
};
window.addEventListener("load", pageLoad);
/* let x = "text";
switch(x) {
  case "text":
    // code block
    break; */
