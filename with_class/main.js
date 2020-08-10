document.addEventListener('DOMContentLoaded', function () {
  // インスタンス化する
  const ta = new TextAnimation('.animate-title');
  const ta2 = new TextAnimation('.animate-title-2');
  setTimeout(() => {
    ta.animate();
    ta2.animate();
    ta.log();
  }, 1000);

    // const el = document.querySelector('.animate-title');
    // const el2 = document.querySelector('.animate-title-2');
    // const str = el.innerHTML.trim().split("");
    // const str2 = el2.innerHTML.trim().split("");

    // // let concatStr = '';

    // // for(let c of str) {
    // //     c = c.replace(/\s+/, '&nbsp;');
    // //     concatStr += `<span class="char">${c}</span>`;
    // // }

    // el.innerHTML = str.reduce((acc, curr) => {
    //     curr = curr.replace(/\s+/, '&nbsp;');
    //     return `${acc}<span class="char">${curr}</span>`;
    // }, "");
    // el2.innerHTML = str2.reduce((acc, curr) => {
    //     curr = curr.replace(/\s+/, '&nbsp;');
    //     return `${acc}<span class="char">${curr}</span>`;
    // }, "");
});

class TextAnimation {
  // クラスを初期化する
  // クラスを呼び出すとかならず実行される
  constructor(el) {
    this.el = document.querySelector(el);
    this.chars = el.innerHTML.trim().split('');
    this.el.innerHTML = this._splitText();
  }

  // メソッドを定義する
  log() {
    console.log(this.el);
  }

  // アンダーラインから始まるメソッドはプライベートメソッド
  // クラス内でしか使えないメソッド
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }

  // アンダーラインから始まらないメソッドはパブリックメソッド
  // クラス外でも使えるメソッド
  animate() {
    this.el.classList.toggle('inview');
  }
}
