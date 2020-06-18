const buttons = document.querySelectorAll('div.content-button div button')

for(let button of buttons){
    
    button.onclick = (event) => {
        const text1 = document.querySelector('div.content-button p#one')
        const text2 = document.querySelector('div.content-button p#two')
        const text3 = document.querySelector('div.content-button p#three')
        
        const btn = button.getAttribute('id')

        if(btn == 'one'){
            showText1()
            button.textContent = 'Esconder'
        }
        
        if(btn == 'two'){
            showText2()
            button.textContent = 'Esconder'
        }
        
        if(btn == 'three'){
            showText3()
            button.textContent = 'Esconder'
        }

        function showText1(){
            text1.classList.toggle('active')
        }

        function showText2(){
            text2.classList.toggle('active')
        }

        function showText3(){
            text3.classList.toggle('active')
        }

    }    
}