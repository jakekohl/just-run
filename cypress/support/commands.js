Cypress.Commands.add('ping', (url) => {
  cy.request({
    url: `${url}/ping`,
    failOnStatusCode: true,
  })
})
