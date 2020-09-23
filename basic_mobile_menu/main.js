class MobileMenu {
  constructor() {
    // DOMのオブジェクトリテラルを初期化
    this.DOM = {};
    this.DOM.btn = document.querySelector('.mobile-menu__btn');
    this.DOM.container = document.querySelector('#global-container');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    // クリックかタップかを識別してイベントを登録する
    return window.ontouchstart ? 'touchStart' : 'click';
  }

  _toggle() {
    this.DOM.container.classList.toggle('menu-open');
  }

  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
  }
}

new MobileMenu();
