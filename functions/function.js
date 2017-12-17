/*******************************

Function Summary

1. There is no need to specify the return value of the function since any function can return
any value at any time.

2. Functions that don¡¯t specify a return value actually return the special value undefined.

3. There is no such thing as a function signature, because arguments are passed as an array
containing zero or more values.

4. Any number of arguments can be passed into a function and are accessible through the
arguments object.

5. Function overloading is not possible because of the lack of function signatures.

************************************/



// create a function with name
function sayHi(name, message){
	alert("Hi " + name + " " + message);
}


// create an anonymous function

var sayHello = function(name, message){
	document.writeln("Hello " + name + " " + message);
}

// function with no arguments, use arguments object

function howManyArgs(){
	document.writeln("How many arguments ? ")
	document.writeln(arguments.length);
}

function addNumbers(){
	if(arguments.length === 0){
		return 0;
	}else{
		var sum = 0;
		for(var i=0;i=arguments.len;i++){
				sum += arguments[i];
		}
		return sum;
	}
}

