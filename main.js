
let answer = document.querySelector('.totalBar')
let buttons = document.querySelectorAll('.row')
console.log(buttons)

for (let button of buttons){
    button.addEventListener('click', function() {
 let newEl = document.createElement('p')
 let text = document.createTextNode(button.innerText)
  newEl.appendChild(text)  
 answer.appendChild(newEl)
})
}


