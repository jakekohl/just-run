const baseUrl = Cypress.config('e2e').baseUrl

describe('Smoke Tests for PR requests', () => {
  it('should load the page', () => {
    cy.visit(baseUrl).its('status').should('eq', 200)
  })
})
