// 引数に関数を取る処理のことをコールバックと呼ぶ
function hello(callback){
  console.log('hello ' + callback());
}

function getName(){
  return 'Code Mafia';
}

// 引数のgetNameに()をつけると、文字列を返すためにcallback処理が行われずエラーになる
hello(getName);
