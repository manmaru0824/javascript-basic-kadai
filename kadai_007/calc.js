// 変数の宣言
let numB;

// 値の代入
numB = 1;
 
// 変数numの値を出力する（確認用）
console.log(numB);

// 変数numの値が3と5の倍数であれば、「3と5の倍数です」という文字列を出力する
if (numB %15=== 0) {
    console.log('3と5の倍数です');
}
// 変数numの値が3の倍数であれば、「3の倍数です」という文字列を出力する
else if (numB % 3 === 0) {
    console.log('3の倍数です');
}
// 変数numの値が5の倍数であれば、「5の倍数です」という文字列を出力する
else if (numB % 5 === 0) {
    console.log('5の倍数です');
}
else{
    console.log(numB)
}