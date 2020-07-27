const Allbuttons = document.querySelectorAll('div.content-button div button')
const divButtons = document.querySelector('div.content-button')

for(let button of Allbuttons){
    
    button.onclick = () => {
        const text1 = divButtons.querySelector('ul#one'),
        text2 = divButtons.querySelector('ul#two'),
        text3 = divButtons.querySelector('p#three')
        btnAttribute = button.getAttribute('id'),
        stateButton = button.getAttribute('value')

        verifyButtonId()

        function verifyButtonId(){
                if(btnAttribute == 'one'){
                    text1.classList.toggle('active')
                    VerifyStateButton()
                }
                
                if(btnAttribute == 'two'){
                    text2.classList.toggle('active')
                    VerifyStateButton()
                }
                
                if(btnAttribute == 'three'){
                    text3.classList.toggle('active')
                    VerifyStateButton()
                } 
        }

        function hiddenText(){
            button.textContent = 'Esconder'
            button.setAttribute('value', 'Esconder')
        }

        function showText(){
            button.textContent = 'Mostrar'
            button.setAttribute('value', 'Mostrar')
        }

        function VerifyStateButton(){
            stateButton == 'Mostrar' ? hiddenText() : showText()
        }
    }    
}