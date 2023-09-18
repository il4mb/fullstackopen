class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {

        let str = `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        console.log(str)
        return str;
    }
}

export default Person;