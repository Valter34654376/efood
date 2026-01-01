describe('Home - Efood', () => {
  it('deve carregar a página inicial', () => {
    cy.visit('/')
    cy.contains('Viva experiências gastronômicas')
  })
})
