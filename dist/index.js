"use strict";
let id = 5;
let company = "major linkx";
let isPublished = true;
let x = "This can be set to any type";
let ids = [1, 2, 3, 4, 5, 6];
let arr = [1, true, "test"];
let person = [1, "Rue", true];
let employee;
employee = [
    [1, "John"],
    [2, "Janice"],
    [3, "Janelle"],
    [4, "Rue"],
];
let pid;
pid = "22";
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const example = { id: 3, name: "Rue" };
const example2 = {
    id: 1,
    name: "John",
};
let cid = 1;
let customerId = cid;
let customerId2 = cid;
function addNum(x, y) {
    return x + y;
}
const result = addNum(1, 2);
function log(message) {
    console.log(message);
}
const output = log('Hello World');
const testUser = { id: 3, name: "Rue" };
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const p1 = 1;
const p2 = "Test";
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const rue = new Person(10, "Rue");
const jon = new Person(12, "Jon");
console.log(rue.register());
