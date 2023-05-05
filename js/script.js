let block = document.querySelector(".block_contants");
let obj;

async function renderAll(){

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
obj = await response.json(); 

for(let  i = 0; i < obj.length; i++){
 outputContent(obj[i]);
}

}

function outputContent(obj){
  let blockConten = document.createElement("div");
  blockConten.classList.add("block_content");
  let userId = document.createElement('p');
  userId.textContent = obj.userId;
  userId.classList.add("user_id");
  blockConten.append(userId);
  let title = document.createElement('p');
  title.textContent = obj.title;
  title.classList.add("title");
  blockConten.append(title);
  let body = document.createElement('p');
  body.textContent = obj.body;
  body.classList.add("user_id");
  blockConten.append(body);
  let span = document.createElement('span');
  span.classList.add('tooltip');
  span.dataset.tooltip = "какой-то контент";
  span.textContent = "подробнее";
  blockConten.append(span);
  block.append(blockConten);

}

renderAll();
