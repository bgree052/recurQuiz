function setup(){
  recur("3*k",2,11);
  recur("pow(k,3)",1,11);
}

function draw(){
}

function recur(inc,u0,un){
  var array = [];
  var newInt = u0;
  array.push(u0);
  var end = un;

  for(var i = 0; i<un; i++){
    var newInc = inc.replace(/k/, '(i+1)');
    console.log(newInc);
    newInc = eval(newInc);

    newInt += newInc;
    array.push(newInt);
  }
  console.log("Array: " + array);
  console.log("Ans: " + array[end]);
}
