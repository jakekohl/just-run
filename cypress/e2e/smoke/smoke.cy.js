const baseUrl = Cypress.env('appUrls').baseUrl

describe('Smoke Tests for PR requests', () => {
  it('should load the ping page', () => {
    cy.ping().its('status').should('eq', 200)
  })
})
