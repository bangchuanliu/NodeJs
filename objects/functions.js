

//function declaration

//console.log(sum(1,2)); // error
var sum = function(n1,n2){
	return n1 + n2;
}

console.log(sum2(1,2)); // 3

function sum2 (n1 , n2){
	return n1 + n2;
}

console.log(sumVaraible); // undefined
var sumVaraible = 2;

// function internals
function factorial(num){
	if(num == 0){
		return 1;
	}else{
		return num * factorial(num - 1);
	}
}
console.log(factorial(3));// 6
function factorial2(num){
	if(num == 0){
		return 1;
	}else{
		return num * arguments.callee(num - 1);
	}
}
console.log(factorial2(3));// 6

// this 
window.color = "red";
var obj = {color:"blue"};

function display(){
	console.log(this.color);
}
display() // red
obj.display = display;
obj.display(); // blue

// arguments.callee function.caller
function outer(){
	function inner(){
		console.log(inner.caller);//outer
		console.log(arguments.callee.caller) //outer
	}
}
outer();

// apply() and call()
var sum1 = function(n1,n2){
	return n1 + n2;
}
function callSum1(n1, n2){
	return sum1.apply(this,arguments);
}
function callSum2(n1, n2){
	return sum1.apply(this,[n1,n2]);
}

function callSum3(n1,n2){
	return sum1.call(this,n1,n2);
} 
console.log(callSum1(1,2)); //3
console.log(callSum2(1,2)); //3
console.log(callSum3(1,2)); //3

window.bg = "red";
var o = {bg:"blue"};
function sayBg(){
	console.log(this.bg);
}
sayBg(); // red
sayBg.call(window); // red
sayBg.call(this); // red
sayBg.call(o); // blue




