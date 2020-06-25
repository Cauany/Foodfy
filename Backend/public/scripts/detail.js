const buttons = document.querySelectorAll('div.content-button div button')

for(let button of buttons){
    
    button.onclick = (event) => {
        const text1 = document.querySelector('div.content-button ul#one')
        const text2 = document.querySelector('div.content-button ul#two')
        const text3 = document.querySelector('div.content-button p#three')
        
        const btn = button.getAttribute('id')
        const state = button.getAttribute('value')

        function OnclickButton(){
            verifyButtonId()

            function verifyButtonId(){
                    if(btn == 'one'){
                        showText1()
                        VerifyStateButton()
                    }
                    
                    if(btn == 'two'){
                        showText2()
                        VerifyStateButton()
                    }
                    
                    if(btn == 'three'){
                        showText3()
                        VerifyStateButton()
                    } 
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

            function VerifyStateButton(){
                if(state == 'Mostrar'){
                    button.textContent = 'Esconder'
                    button.setAttribute('value', 'Esconder')
                }else if(state == 'Esconder'){
                    button.textContent = 'Mostrar'
                    button.setAttribute('value', 'Mostrar')
                }
            }
        }

        OnclickButton()
    }    
}