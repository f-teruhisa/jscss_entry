document.addEventListener('DOMContentLoaded', function(){
  const el = document.querySelector('.animate-title');

  // trimで空白を詰める
  // inline要素は高さと横幅がゼロになるので、スペースが無視される
  const str = el.innerHTML.trim().split("");
  el.innerHTML = str.reduce((acc, curr) => {
    // 半角スペースを特殊文字に置き換えてスペースを実現
    curr = curr.replace(/\s+/, '&nbsp;');
    return `${acc}<span class="char">${curr}</span>`;
  }, "");
});
