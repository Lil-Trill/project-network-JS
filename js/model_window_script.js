const modelWindow = document.querySelector(".block_contants");

modelWindow.addEventListener('click', (event)=>{
    let elem = event.target

})

function onTooltipClick(event){
    event.currentTarget.classList.toggle('tooltip-animated');
}