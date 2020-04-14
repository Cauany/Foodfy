const Overlay = document.querySelector('.content-global.ingredients')
const Overlay2 = document.querySelector('.content-global.prepare')
const Overlay3 = document.querySelector('.content-global.information')
const button = document.getElementsByClassName('one')
const button2 = document.getElementsByClassName('two')
const button3 = document.getElementsByClassName('three')

for( let btn of button){
    btn.addEventListener('click', function one(){
        Overlay.classList.add('mostrar')
        document.querySelector('.one').innerHTML ="Esconder"
    })

}

for (let btn of button2){
    btn.addEventListener("click", function() {
    
    Overlay2.classList.add('mostrar')
    document.querySelector('.two').innerHTML = "Esconder"
    })
}

for (let btn of button3){
    btn.addEventListener("click", function() {
    
    Overlay3.classList.add('mostrar')
    document.querySelector('.three').innerHTML = "Esconder"
    })
}
