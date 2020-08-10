document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    ta.animate();
    ta2.animate();
    btn.addEventListener('click', function() {
      ta.animate();
    });
});

// この中でthisはwindowオブジェクトを参照する

class TextAnimation {
    constructor(el) {
        // この中でthisは各taインスタンスのオブジェクトを参照する
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
      window.setTimeout(function() {
        // この中でthisはwindowオブジェクトを参照する
        console.log(this);
      }.bind(this)); // bindを使って、外部のthisと内部のthisを合わせることができる（ここでは各taがthisとなる）
        this.el.classList.toggle('inview');
    }
}
