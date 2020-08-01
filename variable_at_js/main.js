// var, let, const
// constは後から上書きできない
// ES6で追加された。基本的にはvarは使わず、letかconstを使う

let name = 'Tom';
name = 'Tim';

console.log('hello ' + name);

// 型: Number, String, Boolean, Undefined, Null, Symbol
// JavaScriptは動的型付け言語

let variable = 'str';
variable = 12;
// 12なのでnumber型
console.log(typeof variable);
