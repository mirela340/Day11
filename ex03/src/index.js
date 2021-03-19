// Create a myPetsArray here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray
function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    // Only change code below this line
    myNewPets.push("Bird");
    myNewPets.push("Fish");
    var firstPet = myNewPets[0];
    var lastPet = myNewPets[myNewPets.length - 1];
    myNewPets.unshift("Lion");

    return [myNewPets[0], myNewPets[2], myNewPets[3]];
    // Only change code above this line
}
console.log(myArrayFunction(myPetsArray)); // Change this line
module.exports = myArrayFunction;