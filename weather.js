
let div1 =document.querySelector('div#result');
let ul = document.createElement('ul');
div1.insertAdjacentElement('beforeend',ul);

let li1=document.createElement('li');
li1.textContent='緯度:';
let li2=document.createElement('li');
li2.textContent='経度:';
let li3=document.createElement('li');
li3.textContent='天気:';
let li4=document.createElement('li');
li4.textContent='最低気温:';
let li5=document.createElement('li');
li5.textContent='最高気温:';
let li6=document.createElement('li');
li6.textContent='湿度:';
let li7=document.createElement('li');
li7.textContent='風速:';
let li8=document.createElement('li');
li8.textContent='風向:';
let li9=document.createElement('li');
li9.textContent='都市名:';
let b=document.querySelector('button#btn');
b.addEventListener('click',showSelectResult);

function showSelectResult(){
  let s=document.querySelector('select#kensaku');
  let d =s.selectedIndex;
  let os = s.querySelectorAll('option');  
    let o = os.item(d); 
      let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+o.id+'.json';
  
      axios.get(url)
          .then(showResult)   
          .catch(showError)  
          .then(finish);      
          console.log(o.textContent);
}
function showResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }
  li1.textContent='緯度:'+data.coord.lon;
  li2.textContent='緯度:'+data.coord.lat;
  li3.textContent='天気:'+data.weather[0].description;
  li4.textContent='最低気温:'+data.main.temp_min;
  li5.textContent='最高気温:'+data.main.temp_max;
  li6.textContent='湿度:'+data.main.humidity;
  li7.textContent='風速:'+data.wind.speed;
  li8.textContent='風向:'+data.wind.deg;
  li9.textContent='都市名:'+data.name;
  ul.insertAdjacentElement('beforeend',li1);
ul.insertAdjacentElement('beforeend',li2);
ul.insertAdjacentElement('beforeend',li3);
ul.insertAdjacentElement('beforeend',li4);
ul.insertAdjacentElement('beforeend',li5);
ul.insertAdjacentElement('beforeend',li6);
ul.insertAdjacentElement('beforeend',li7);
ul.insertAdjacentElement('beforeend',li8);
ul.insertAdjacentElement('beforeend',li9);
}

function showError(err) {
  console.log(err);
}

function finish() {
  console.log('Ajax 通信が終わりました');
}


