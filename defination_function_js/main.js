// 関数の結果を変数に格納する
// 無名関数
const hello = function (name, age) {
  // let name = 'Code Mafia';
  console.log('hello ' + name + ' I am ' + age);
  // retuenを使えば、実行元に結果を返すことができる
  return name + age;
};

hello('Code Mafia', 10);
const returnVal = hello('Code Mafia2', 20);
console.log(returnVal);
