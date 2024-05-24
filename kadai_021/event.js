//btnというidを持つHTML要素を取得し、定数に代入
const btn=document.getElementById(`btn`);

//textというidを持つHTML要素を取得し、定数に代入
const text=document.getElementById('text')



// ボタンがクリックされた時の処理を設定
document.getElementById('btn').addEventListener('click', function() {
	window.setTimeout( function() {
		document.getElementById('text').textContent = "ボタンをクリックしました";
	}, 2000);
});