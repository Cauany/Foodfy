const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card-recipe')

for (let card of cards){
    card.addEventListener("click", function() {
        const linkId = card.getAttribute('id')

        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `/assets/${linkId}.png`
        modalOverlay.querySelector("a").href = `/recipe/${linkId}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("img").src = ""
    modalOverlay.querySelector("a").href = ""
})
