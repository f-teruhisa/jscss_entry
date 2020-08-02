const arry = [1,2,3,4,5];

// 前のループの戻り値がaccuに入っている
// 第２引数の10はaccuの初期値となる
arry.reduce(function(accu, curr) {
  console.log(accu, curr);
  return accu + curr;
}, 10);

const str = 'animation';
// strの中身を配列で組み直す
const strArry = str.split('');

console.log(strArry);

const result = strArry.reduce((accu, curr) => {
  return accu + '<' + curr + '>';
},'');

console.log(result);
