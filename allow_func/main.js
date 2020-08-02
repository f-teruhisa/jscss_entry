// 実行より定義が後だった場合もエラーにならない
// function hello(name) {
//   console.log('hello ' + name);
// };

// 無名関数でも可能
// 実行より定義が後だった場合はエラーになる
// const hello = function(name = 'Tom') {
//   console.log('hello ' + name);
// };

// アロー関数: 無名関数の記述を楽にできる
const hello = (name = 'Tom') => console.log('hello ' + name);

hello('Code Mafia');
hello('Code Mafia2');
hello();
