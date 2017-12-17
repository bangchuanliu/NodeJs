


// create new array

var arr1 = new Array() // NOT recommend

var arr2 = new Array(3) // NOT recommend

var arr3 = new Array(1,2,3); // NOT recommend

var arr4 = []; //recommend

var arr5 = [1,2,3]; // recommend

// array length

var array1 = [];
alert(array1.length) // 0

var array2 = [1,2,3];
alert(array2.length); //3

array2(array2.length) = 5;
alert(array2) // 1,2,3,5

array2.length = 2;
alert(array2);// 1,2

alert(array2[3]); // undefined

// conversion method  toString(), toLocaleString(), valueOf(), join()
var a1 = ["bule","red","black"];
alert(a1.toString()); // bule,red,black
alert(a1.toLocaleString()); // bule,red,black
alert(a1.valueOf())  // bule,red,black

var joinedStr = a1.join(":");
alert(joinedStr) //  bule:red:black

// override method
var person = {
toString : function(){
return "Kevin";
}

toLocaleString : function(){
	return "邦传";
}
}
var person2 = {
toString : function(){
return "Peter";
}

toLocaleString : function(){
	return "路也";
}
}
var personArr = [person,person2];
alert(personArr.toString()); // Kevin,Peter 
alert(personArr.toLocaleString()); // 邦传，路也

// Stack method  LIFO
/***
push：add one element to the end of array
pop： get the end element of array
***/
var names = ["roger","kevin","peter"];
names.push("abby","jerome");
alert(names.length); //5
alert(names.pop()) // jerome

// Queue method FIFO
/****
push：add one element to the end of array
shift：get the first element of array
****/
var colors = [];
colors.push("red","blue");
alert(colors);// red,blue
alert(colors.shift()); // red

/***
unshift: add one element to the first of array
pop: get the last element of array
****/
var colors2 = [];
colors2.unshift("red","blue");
alert(colors2);// bule,red
alert(colors2.pop()); // red

// Reorder method
var nums = [1,2,3,4];
nums.reverse();
alert(nums);// 4,3,2,1

var nums2 = [1,4,6,2];
nums.sort();
alert(sort());// 1,2,4,6

function compare(n1,n2){
if(n1 < n2){
	return 1;
}else if(n1 > n2){
	return -1;
}else{
	return 0;
}
}
nums.sort(compare);
alert(nums) // 6,4,2,1


/*******Manipulation method********/

// slice
var colors = ["red","blue","green"];
console.log(colors.slice(1)); // bule,green
console.log(colors.slice(0,1)); // red

// concat
var newColors = colors.concat("black",["orange","yellow"]);
console.log(newColors); //red,blue,green,black,orange,yellow

//splice
//delete
newColors.splice(0,2);
console.log(newColors) //green,black,orange,yellow
//insert
newColors.splice(2,0,"red"); 
console.log(newColors);// green,black,red,orange,yellow
//replacement
newColors.splice(0,1,"blue"); 
console.log(newColors);//blue,black,red,orange,yellow

/*******Location method********/
var numbers = [1,2,3,4,5,6,4,7,9];
var index = numbers.indexOf(4);
console.log(index); //3
var lastIndex = numbers.lastIndexOf(4);
console.log(lastIndex);//6

var index2 = numbers.indexOf(4,4);
console.log(index2); //6

/*******Iterative method*******

1. every() — Runs the given function on every item in the array and returns true if the function returns true for every item.

2. filter() — Runs the given function on every item in the array and returns an array of all items for which the function returns true.

3. forEach() — Runs the given function on every item in the array. This method has no return value.

4. map() — Runs the given function on every item in the array and returns the result of each function call in an array.

5. some() — Runs the given function on every item in the array and returns true if the function returns true for any one item.

*/

var nums = [1,2,3,4,5,4,3,2,1];

var everyResult = nums.every(function(item,index,array){
	return item > 2;
})
console.log(everyResult); // false

var someResult = nums.some(function(item,index,array){
	return item > 2;
})
console.log(someResult); // true

var filterResult = nums.filter(function(item,index,array){
	return item > 2;
})
console.log(filterResult); //3,4,5,4,3

var mapResult = nums.map(function(item,index,array){
	return item * 2;
})
console.log(mapResult); //2,4,6,8,10,8,6,4,2

var newNums = [];
nums.forEach(function(item,index,array){
	newNums.push(item * 2);
})
console.log(newNums); //2,4,6,8,10,8,6,4,2

/*******Reduction method*******/
var newNumbers = [1,2,3,4,5];
var reduceResult = newNumbers.reduce(function(pre,cur,index,array){
	return pre + cur;
});
console.log(reduceResult);// 15

























 

















