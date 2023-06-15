let containerEl=document.querySelector('.container')

function createDivs(num){
    num = num*num
    for (let i=0;i<num;i++){
        div=document.createElement('div')
        containerEl.appendChild(div)
    }
}

createDivs(16)

let divEl = document.querySelectorAll('.container div')
for (let i=0;i<divEl.length;i++){
    divEl[i].classList.add('divEl')
    divEl[i].addEventListener('mouseover',()=>{
        divEl[i].style.cssText = 'background-color: black;'
    })
}

const reset = document.querySelector('#reset')
reset.addEventListener('click', () => {
    let divEl = document.querySelectorAll('.divEl')
    for (let i=0;i<divEl.length;i++){
        divEl[i].style.cssText = 'background-color: white;'
    }
})
