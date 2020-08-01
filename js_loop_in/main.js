const arry = [1, 2, 3, 4, 5, 6];

// inの場合は添字が渡される
for (let i in arry) {
    console.log(i);
}

// ofの場合は値が渡される
// ブラウザによっては対応していないので注意
for (let i of arry) {
  console.log(i);
}
