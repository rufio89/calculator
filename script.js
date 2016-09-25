var currentItem =0;
var op = "";
var prevItem=0;
var clear = 0;


var getNumbers = function(item){
	if(currentItem==0){
		if(!item){
			currentItem = this.id;
		}
		else{
			currentItem = item;
		}
		console.log(currentItem);
	}
	else if(currentItem!=0){
		if(!item){
			currentItem = currentItem + "" + this.id;
		}
		else{
			currentItem = currentItem + "" + item;
		}
		console.log(currentItem);	
	}
	if(clear==1){
		clear = 0;
	}
	document.getElementById("result").innerHTML = currentItem;
}

var callOp = function(operation){
	if(!operation){
		op = this.value;
	}
	else{
		op = operation;
	}
	clear=1;
	prevItem = currentItem;
	currentItem = 0;
	console.log("IN CALL OP: op=" + op);
	console.log("IN CALL OP: clear=" + clear);
	console.log("IN CALL OP: current=" + currentItem);
	console.log("IN CALL OP: prev=" + prevItem);
	document.getElementById("result").innerHTML = op;
}

var runOp = function(){
	console.log("here");
	var retNum=0;
	prevItem = parseInt(prevItem);
	currentItem = parseInt(currentItem);
	if(op=="+"){
		retNum = prevItem + currentItem;
	}
	else if(op=="-"){
		retNum = prevItem - currentItem;
	}
	else if(op=="*"){
		retNum = prevItem * currentItem;
	}
	else{
		retNum = prevItem / currentItem;
	}
	currentItem = retNum;
	console.log("IN RUN OP: prev=" + prevItem);
	console.log("IN RUN OP: current=" + currentItem);

	document.getElementById("result").innerHTML = retNum;
}

var clearData = function(){
	prevItem = 0;
	currentItem = 0;
	op = "";
	clear = 0;
	document.getElementById("result").innerHTML = "";
}



function replaceValue(value){
	document.getElementById("result").innerHTML = "";
	document.getElementById("result").innerHTML = value;
}


window.onload = function(){
	document.getElementById("0").onclick = getNumbers;
	document.getElementById("1").onclick = getNumbers;
	document.getElementById("2").onclick = getNumbers;
	document.getElementById("3").onclick = getNumbers;
	document.getElementById("4").onclick = getNumbers;
	document.getElementById("5").onclick = getNumbers;
	document.getElementById("6").onclick = getNumbers;
	document.getElementById("7").onclick = getNumbers;
	document.getElementById("8").onclick = getNumbers;
	document.getElementById("9").onclick = getNumbers;

	document.getElementById("sum").onclick = callOp;
	document.getElementById("difference").onclick = callOp;
	document.getElementById("product").onclick = callOp;
	document.getElementById("quotient").onclick = callOp;
	document.getElementById("run").onclick = runOp;
	document.getElementById("clear").onclick = clearData;

	document.onkeypress = function(evt) {
    	evt = evt || window.event;
    	var charCode = evt.keyCode || evt.which;
    	var charStr = String.fromCharCode(charCode);
			if(charStr === "+" || charStr=== "-" || charStr === "*" || charStr==="/"){
					callOp(charStr);
			}
			else if(charStr=== "=" || charCode ===13){
					runOp();
			}
			else if(parseInt(charStr) >="0" || parseInt(charStr) <= "9"){
				  getNumbers(charStr);
			}	
			console.log(charStr + "" + charCode);
		
	};

}




