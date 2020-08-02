const array = [1,2,3,4,5];

array.forEach(function(val) {
  console.log(val);
});

// 上のforEachと同じ結果になる
for(let i = 0; i < array.length; i++) {
  const v = array[i];
  console.log(v);
}

// forEachの中身をarrow関数に
array.forEach(v => console.log(v))
