describe("Website de recipes - Foodfy", () =>{
    it("Should return true when title component was correct", () =>{
        cy.visit("/")

        cy.contains('As melhores receitas').should('to.have.length', 1)
    })

    it('Should to show modal', () => {
        cy.visit('/')

        cy.get('[data-cy=click-modal]').click()
    })
})