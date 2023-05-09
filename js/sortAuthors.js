const btnSort = document.querySelector(".btn-sort");
const blockContent = document.querySelector(".block_contants");
let radio = document.getElementsByName('author');
console.log(radio);

for(let i = 0; i < radio.length; i++){
     radio[i].onchange = testRadio;
}

function testRadio(){
    console.log(this.value);
}

btnSort.addEventListener('click',()=>{
    blockContent.innerHTML = " ";
    console.log("какая то сортировка там");
});