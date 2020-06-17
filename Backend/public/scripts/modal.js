const modal = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('div.card-recipe')
const close = modal.querySelector('.modal a.close-modal i')


// Função de mostrar o modal
for(card of cards){
    const id = card.getAttribute('id')

    card.onclick = () => {

        modal.classList.add('active')
        modal.querySelector('.modal div.img-card img')
            .setAttribute('src', `/assets/${id}.png`)
        modal.querySelector('.modal div.img-card img')
            .setAttribute('alt', `Imagem de ${id}`)
        modal.querySelector('.modal a.but')
            .setAttribute('href', `/recipeDetail?id=${id}`)
    }

    close.onclick = () => {
        modal.classList.remove('active')
        modal.querySelector('.modal div.img-card img')
            .setAttribute('src', '')
        modal.querySelector('.modal div.img-card img')
            .setAttribute('alt', '')
    }
}