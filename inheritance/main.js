document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    const ta = new TweenTextAnimation('.tween-animate-title');
    ta.animate();
});


class TextAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = document.querySelector(el);
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.el.classList.toggle('inview');
    }
}

// extendsで継承
class TweenTextAnimation extends TextAnimation {
  constructor(el) {
    // 親のconstractorが呼ばれる
    super(el);
    this.DOM.chars = this.DOM.el.querySelectorAll('.char');
      // this.el = document.querySelector(el);
      // this.chars = this.el.innerHTML.trim().split("");
      // this.el.innerHTML = this._splitText();
  }
  animate() {
    this.DOM.el.classList.add('.inview');
    this.DOM.chars.forEach((c, i)=> {
      TweenMax.to(c, .6, {
        ease: Back.easeOut,
        delay: i * .05,
        startAt: { y: '-50%', opacity: 0 },
        y: '0%',
        opacity: 1
      });
    })
      this.DOM.el.classList.toggle('inview');
  }
}
