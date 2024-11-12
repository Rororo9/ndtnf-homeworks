"use strict";
let element = this.document.getElementById("content");
class User {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const den = new User("Den", 25, "man");
if (element) {
    element.innerHTML = `Имя: ${den.name}, возраст: ${den.age}, пол: ${den.gender}`;
}
