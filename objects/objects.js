/*******************************



********************************/


//////////////////////////////////
//	OBJECT type

/////////////////////////////////

// 3 ways to create an object
var obj1 = new Object();
obj1.name = "Nicolas";
obj1.age = 30;

var obj2 = {
name:"Nicolas",
age:29
}

//recommend this ways
var obj3 = {};
obj3.name = "Nicolas";
obj3.age = 30;

// use object's properties

var person = {
name : "kevin",
title: "eng"
};

// option 1
alert(person.name); // kevin
// option 2
alert(person[name]); // kevin

// Two reasons to use option 2
// 1. properties is a variable
var myName = "name";
//alert(person[myName]); //kevin
//2. properties contain space " "
//person[first name] = "peter";
//person[last name] = "pan";

function print() {
	content = "print something";
	console.log(content);
}








