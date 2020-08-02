const array = [1,2,3,4,5];

function forEach(ary, callback) {
  for(let i = 0; i < ary.length; i++) {
    callback(array[i]);
  }
}

function log(val){
  console.log(val);
}
function double(val){
  val = val * 2;
  log(val);
}


forEach(array, double);
