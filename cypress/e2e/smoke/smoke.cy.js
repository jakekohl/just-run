describe('Smoke Tests for PR requests', () => {
  it('should load the page', () => {
    cy.visit('http://localhost:8080').its('status').should('eq', 200)
  })
})
