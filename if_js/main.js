const num = Number(1);
console.log(num);

// === での比較は、型も含めた一致を比較する
if(0 === false) {
  console.log('this is false');
} else if(0 == false) {
  console.log('this is elseif');
} else {
  console.log('this is false');
}
