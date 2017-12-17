/************************************************
Dynamic Variables



**********/

// dynamic properties
var person = {};
person.name = "Nicolas";
//alert(person.name);


//passing by value

var num1 = 10;
var num2 = num1;
num1 = 20;

var obj1 = {name:"Nicolas"};
var obj2 = obj1;
obj2.age = 30;

// function argument passing, it also pass value
var mynumber = 1;
function addNum(num){
	num = num + 10;
	return num;
}
//alert(mynumber);
var numberAdded = addNum(mynumber);
//alert(mynumber);
//alert(numberAdded);

var myobj = {name:Nicolas,age:30};
function alias(obj){
	obj.alias = Nico;
}

function aliasNames(obj){
	obj = {};
	obj.alias = Nico;
}
// call this two functions and check the property values
//alert(myobj.name);
//alert(myobj.alias);



