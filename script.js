function person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};
person.prototype.greeting = function() {
  alert("Hi i'm " + this.name.first + ". ");
}

function teacher(first, last, age, gender, interests, subject) {
  person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

teacher.prototype = Object.create(person.prototype);

teacher.prototype.greeting = function() {
  console.log1("No, it's me " + this.name.last + ".");
}

const marat = new teacher("Marat", "F", 21, "male", ["snowboarding", "music", "dance"], "chemistry");

console.table(marat);


// function brick() {
//   this.width = 10;
//   this.height = 15;
// }

// function blueBrick() {
//   brick.call(this);
//   this.opacity = 2;
//   this.color = "red";
// }
// let newBrick = blueBrick(34, 45,67,64);
// console.table(newBrick);