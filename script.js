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
  console.log("No, it's me " + this.name.last + ".");
}




function student(first, last, age, gender, interests) {
  person.call(this, first, last, age, gender, interests);
}
//student.prototype = Object.create(person.prototype);

student.prototype.greeting = function() {
  console.log("Yo, it's " + this.name.first + ".");
}

let marat = new student("Marat", "F", 21, "male", ["snowboarding", "music", "dance"]);

console.table(marat);
