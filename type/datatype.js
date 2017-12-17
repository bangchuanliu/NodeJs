/*****

Data Type Summary

1. The basic data types in ECMAScript are 
Undefined, Null, Boolean, Number, and String.

2. Unlike other languages, there's no separate data type for integers versus floating-point
values; 
Number type represents all numbers.

3. All arguments in ECMAScript are "passed by value". It is not possible to pass
arguments by reference.

4. There is also a complex data type, Object, that is the base type for all objects in the
language.

****/

var _undefined;
var _null;
var booleanObj;
var numberObj;
var strObj;
var primitiveBoolean;
var primitiveNumber;
var primitiveString;


booleanObj = new Boolean("true");
primitiveBoolean = true;
booleanObj = Boolean("false");


numberObj = new Number(10);
numberObj = Number(2.5);
primitiveNumber = 3.5;
primitiveNumber = 4;

primitiveString = "Nicolas";
strObj = new String("peter");
strObj = String("kevin");

// use typeof to judge primitive values

//alert(typeof primitiveBoolean);
//alert(typeof primitiveNumber);
//alert(typeof primitiveString);
//alert(typeof _undefined);

//use instanceof to judge reference values
alert(numberObj instanceof Number);
alert(strObj instanceof String);
alert(booleanObj instanceof Boolean)

// another way to judge reference type
Object.prototype.toString.call(numberObj);
Object.prototype.toString.call(strObj);
Object.prototype.toString.call(booleanObj);





