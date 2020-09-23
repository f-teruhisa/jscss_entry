// 呼び出されるコールバック処理を定義
const cb = function(entries, observer){
  // どの要素が出入りしたかを確認する
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      console.log('inview');
      // 監視対象に入ると、CSSのタグを付与して色を変える
      entry.target.classList.add('inview');
      // 一度監視されると、監視対象から外す
      // observer.unobserve(entry.target);
    } else {
      console.log('outview');

      // 監視対象に入ると、CSSのタグを外して色を戻す
      entry.target.classList.remove('inview');
    }
  });
};

const options = {
  // 親要素と監視対象の交差の設定
  root: null,
  // 監視対象の交差点の位置をずらす際の設定
  rootMargin: "0px",
  // 監視の領域に先にはいってくる部分を0, 出ていく部分を1とする定義
  threshold: 0
};

// observerをインスタンス化
const io = new IntersectionObserver(cb);

// 監視対象のDOMを登録し、対象のオブジェクトが画面に入ったときにコールバック処理を実行する
const child = document.querySelector('.child');
io.observe(child);
