const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card-recipe')
const recipes = document.querySelector('content-recipe-detail')

for (let card of cards){
    card.addEventListener("click", function() {
    const linkId = card.getAttribute('id')

    modalOverlay.classList.add('active')
    modalOverlay.querySelector("img").src = `/assets/${linkId}.png`
    modalOverlay.querySelector(".but").href = `/recipeDetail?id=${linkId}`
})
}
    document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("img").src = ""
    modalOverlay.querySelector(".but").href = ""
})

