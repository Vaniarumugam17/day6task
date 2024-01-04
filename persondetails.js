//3.Write a “person” class to hold all the details.

class Person {
  constructor(firstName, lastName, age, department, email, mobile, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.department = department;
    this.email = email;
    this.mobile = mobile;
    this.city = city;
  }
  getPersonDetails() {
    return `Name: ${this.firstName} ${this.lastName}
            age: ${this.age}
            department: ${this.department}
            email: ${this.email}
            mobile: ${this.mobile}
            city: ${this.city}`;
  }
}
let person1 = new Person(
  "Vani",
  "Meenaraj",
  24,
  "Computer Science",
  "vani00712@gmail.com",
  9944062158,
  "Chennai"
);
let person2 = new Person(
  "Meenaraj",
  "Sekar",
  29,
  "Engineering",
  "smeenaraj12@gmail.com",
  7871821567,
  "chennai"
);

console.log(person1.getPersonDetails());
console.log(person2.getPersonDetails());
