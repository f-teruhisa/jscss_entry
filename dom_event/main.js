const dcl = document.querySelector('.dcl');
const load = document.querySelector('.load');

// 読み終わったDOMにアクセスしようしエラーを防ぐ
document.addEventListener("DOMContentLoaded", function () {
    dcl.classList.add('done');
});

window.addEventListener("load", function () {
    load.classList.add('done');
});
