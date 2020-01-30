
let answer = document.querySelector('.totalBar')
let buttons = document.querySelectorAll('.row')
let equals = document.querySelector('.equal')
console.log(equals)

for (let button of buttons){
    button.addEventListener('click', function() {
 let newEl = document.createElement('p')
 let text = document.createTextNode(button.innerText)
  newEl.appendChild(text)  
 answer.appendChild(newEl)
})
}

    equals.addEventListener('click', function(){
       let result= eval(answer.innerText)
       answer.innerText = result
})

