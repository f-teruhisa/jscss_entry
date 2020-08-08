const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

function changeColor(){
  // thisには登録されたDOM（今回はbtn）が格納されている
  this.style.color = 'red';
};

function changeBgColor(){
  // thisには登録されたDOM（今回はbtn）が格納されている
  h1.style.backgroundColor = 'red';
};

// btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);
// btn.removeEventListener('mouseenter', hello);

// このように関数を設定することができる(イベントハンドラ)
// イベントハンドラの場合は、一つの関数しか登録できない
btn.onclick = changeColor;

// html内にonclockで指定することもできるが非推奨
// html内に書いてしまうとJSコードの管理がしづらいため
