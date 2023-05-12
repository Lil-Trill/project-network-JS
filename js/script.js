let block = document.querySelector(".block_contants");
const urlArticle = 'https://jsonplaceholder.typicode.com/posts';
const urlComments = 'https://jsonplaceholder.typicode.com/comments';
const modelWindow = document.querySelector(".model_window");
const btnCloseModelWindow = document.querySelector(".btn_close");
const urlAuthors = "https://jsonplaceholder.typicode.com/users";
const authorsContainer = document.querySelector('.authors'); 
let blockComments = document.createElement('div');
blockComments.classList.add('comments');
let blockContentModelWindow = document.createElement('div');
blockContentModelWindow.classList.add('content');
let objs;
let btns;

btnCloseModelWindow.addEventListener('click',()=>{
 modelWindow.classList.toggle("model-open");
  console.log("модальное окно закрыто");
});

async function getData(){
  block.innerHTML = " ";
  const data = await fetch(urlArticle);
  objs = await data.json();
  for(let i = 0; i < objs.length; i++){
    outputContent(objs[i]);
  }
  getButtons();
}

async function getAuthors(){
  const dataAuthors = await (await fetch(urlAuthors)).json();
  for(let i = 0; i < dataAuthors.length; i++){
    let paragraph = document.createElement('p');
    let input = document.createElement('input');
    input.classList.add("input-authors")
    input.name = "authors";
    input.type = radio;
    input.setAttribute('type','radio');
    input.value = dataAuthors[i].id;
    paragraph.textContent = dataAuthors[i].username;
    paragraph.append(input);
    authorsContainer.append(paragraph);
  }
}

authorsContainer.addEventListener('click',(event)=>{
  let obj = event.target;
  console.log(obj);
  if(obj.classList.contains('input-authors')){
    console.log(obj.value);
    renderSortAuthors(obj.value);
  }
})

function getButtons(){
  btns = document.querySelectorAll(".btn_model_window");
  btns.forEach(btn=>{
    btn.addEventListener('click',(event)=>{
      let parent = btn.parentNode;
      showModelWindow(btn,parent);
    });
    
  });
}

getAuthors();

async function showModelWindow(btn,parent){
  modelWindow.classList.add("model-open");
  modelWindowContent(parent);
  const data = await fetch(urlComments);
  const jsonData = await data.json();
  for(let i = 0; i < jsonData.length; i++){
    if(jsonData[i].id == btn.dataset.authorId) {
      modelWindowComments(jsonData[i]);
    }
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
  body.classList.add("body");
  blockConten.append(body);
  let btn = document.createElement('button');
  btn.classList.add('btn_model_window');
  btn.dataset.authorId = obj.id;
  btn.textContent = "подробнее";
  blockConten.append(btn);
  block.append(blockConten);
}


function modelWindowContent(parent){
  blockContentModelWindow.innerHTML = " ";
  let title = document.createElement('p');
  title.classList.add("title_model");
  title.textContent = parent.querySelector('.title').textContent;
  let body = document.createElement('p');
  body.classList.add("body_model");
  body.textContent = parent.querySelector('.body').textContent;
  blockContentModelWindow.append(title);
  blockContentModelWindow.append(body);
  modelWindow.prepend(blockContentModelWindow);
}

function modelWindowComments(obj){
  blockComments.innerHTML = " ";
  let id = document.createElement('p');
  id.classList.add('id_comment');
  id.textContent = obj.id;
  let email = document.createElement('p');
  email.classList.add('email');
  email.textContent = obj.email;
  let comment = document.createElement('p');
  comment.classList.add("text-comment");
  comment.textContent = obj.body;
  blockComments.append(id);
  blockComments.append(email);
  blockComments.append(comment);
  modelWindow.prepend(blockComments);
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>соритровка по авторам<<<<<<<<<<<<<<<<<<<<<<
const blockContent = document.querySelector(".block_contants");
let radio = document.getElementsByName('authors');
const btnShowAll = document.querySelector(".btn_show_authors");


btnShowAll.addEventListener('click', getData);



async function renderSortAuthors(id){
    block.innerHTML = " ";
    const data = await fetch(urlArticle);
    const jsonData = await data.json();
    console.log(jsonData);
    for(let i = 0; i < jsonData.length; i++){
      if(jsonData[i].userId == id) {
        outputContent(jsonData[i]);
      }
    }
    getButtons();
  }