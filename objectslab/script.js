let dog = {
    name: "Rex",
    numLegs: 4,
    sayName: function(){return "This dog has " + this.numLegs + " legs."}
};
dog.sayName();

console.log(dog.name);
console.log(dog.numLegs);

document.getElementById("demo").innerHTML = dog.name + " has " + dog.numLegs + " legs.";
