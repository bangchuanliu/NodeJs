/*




*/
/**
for (var i=0;i<10;i++){
	a(function(){
		console.log(i);
	});

}

function a(b){
	b();
}

*/

// output is ten's 10

for (var i=0;i<10;i++){
	setTimeout(function(){	
		console.log(i);
	},1000)
}

// output is 0,1,2,3,4,5,6,7,8,9

for(var i=0;i<10;i++){
	(function(e){
		setTimeout(function(){	
		console.log(e);
	},1000)	
	})(i);
}

// output is 0,1,2,3,4,5,6,7,8,9

for(var i=0;i<10;i++){
	setTimeout(
	(function(e){
		return function(){	
		console.log(e);
		}
	})(i)
	,1000);
}
