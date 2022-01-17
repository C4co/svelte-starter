// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('desktop', (action: () => void) => {
  // Macbook 13
  cy.viewport(1280, 800)
  action()
})

Cypress.Commands.add('tablet', (action: () => void) => {
  // Ipad 2 
  cy.viewport(768, 1024)
  action()
})

Cypress.Commands.add('mobile', (action: () => void) => {
  // Iphone 6+ 
  cy.viewport(414, 736)
  action()
})

Cypress.Commands.add('responsive', (action: () => void) => {
  // Macbook 13
  cy.viewport(1280, 800)
  action()

  // Ipad 2 
  cy.viewport(768, 1024)
  action()

  // Iphone 6+ 
  cy.viewport(414, 736)
  action()
})

export { }