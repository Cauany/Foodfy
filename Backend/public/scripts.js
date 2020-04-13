const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card-recipe')
const recipes = document.querySelector('content-recipe-detail')

for (let card of cards){
    card.addEventListener("click", function() {
    const linkId = card.getAttribute('id')

<<<<<<< HEAD
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("img").src = `/assets/${linkId}.png`
    modalOverlay.querySelector("a").href = `/recipe/${linkId}`
})
}
    document.querySelector('.close-modal').addEventListener("click", function() {
=======
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `/assets/${linkId}.png`
        modalOverlay.querySelector("a").href = `/recipe/${linkId}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
>>>>>>> eb8876ee71ccc9122aede0bdb5db0b1bd0c24d8c
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("img").src = ""
    modalOverlay.querySelector("a").href = ""
})

