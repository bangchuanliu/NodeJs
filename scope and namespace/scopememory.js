/********************************************
	Execution Context 

1. Global and Function context

2. With and try-catch statement
	
3. NO block-level context
********************************************/

var color = "bule";

function changeColor(){
	var anotherColor = "red";
	function swapColor(){
		var tempColor = color;
		color = anotherColor;
		anotherColor = tempColor;	
	}
	swapColor();
}

changeColor();

// alert(color) // red


//NO block-level context, variables defined in block
//it's also global context
if(true){
var color = "red";
}

// alert(color); //NO error, red

for(var i=0;i<10;i++){
	do(i);
}
alert(i); // NO error, 10

// if no var declaration, then the variable is global context

function addNum(n1, n2){
	sum = n1 + n2;
	return sum;
}
var result = addNum(10,20);
alert(result); //30
alert(sum); //30






