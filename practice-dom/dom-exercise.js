//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let h2 = document.querySelector('h2#ex42');     // h2#addition 要素を検索

let p = document.createElement('p');                // 新しい p要素を作成
p.textContent = '写真と都市の緯度経度のページです';
p.style.textEmphasis='sesame green';                              // 要素の color プロパティを設定

h2.insertAdjacentElement('afterend', p);            // p要素をh2要素の直後に追加


// 練習4-3 写真表作成プログラム
let div1 = document.querySelector('div#phototable');
let img1 = document.createElement('img');
img1.setAttribute('src', 'taro.png');
let p1 = document.createElement('p');
p1.insertAdjacentElement('beforeend', img1);
div1.insertAdjacentElement('beforeend', p1);

let img2 = document.createElement('img');
img2.setAttribute('src', 'jiro.png ');
let p2 = document.createElement('p');
p2.insertAdjacentElement('beforeend', img2);
div1.insertAdjacentElement('beforeend', p2);

let img3 = document.createElement('img');
img3.setAttribute('src', 'hanako.png');
let p3 = document.createElement('p');
p3.insertAdjacentElement('beforeend', img3);
div1.insertAdjacentElement('beforeend', p3);


// 練習4-4 箇条書き削除プログラム
let w=document.querySelectorAll('ul#location>li');
for(let i of w){
	i.remove();
}

// 練習4-5 箇条書き追加プログラム
for(let i of data){
	let li = document.createElement('li');
	li.textContent = i.name+'...緯度'+i.lat+',経度'+i.lng;
	let ul = document.querySelector('ul#location');
	ul.insertAdjacentElement('beforeend', li);

}


