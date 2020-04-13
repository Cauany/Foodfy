const contentGlobal = document.querySelectorAll('.content-global')
const button = document.querySelectorAll('button')
const buttonOne =  document.querySelector('.one')
const buttonTwo =  document.querySelector('.two')
const buttonThree =  document.querySelector('.three')

button.addEventListerner('click', function(){
    if(button == buttonOne){
        buttonOne.classList.add('mostrar')
    }
})