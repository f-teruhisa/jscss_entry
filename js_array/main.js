// constで定義しても、配列の中身自体を操作することはできる
// 他の配列を宣言して代入し直すことはできない
const array = [1,2,3,4,5,6,'moji',false];
array[5] = 8;
array.push('new item');
array.unshift('old item');
console.log(array);
console.log(array[0]);
