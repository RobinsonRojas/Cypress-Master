describe('Loginnnn', () => {
  it('Iniciar sesión', () => {
    cy.visit('baseUrl', { failOnStatusCode: false })
    cy.get("[placeholder='Usuario']").type('Admin')
    cy.get("[placeholder='Contraseña']").type('Admin')
    cy.contains('Iniciar sesión').click()
    cy.url().should('include', '/home')
  })
})
