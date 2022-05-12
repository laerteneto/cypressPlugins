/**
 * TO AVOID ANY ERRORS WHEN CREATING A COMMAND,
 * DO NOT FORGET TO ADD THE METHOD SIGNATURE IN THE index.d.ts
 * FILE LOCATED IN cypress/support/
 */

// References for global autocomplete
/// <reference types="cypress" />

import 'cypress-iframe'
import 'cypress-wait-until'

const executeCommand = (command) => {
  cy.task('pluginExecuteCommand', command)
}

/**
 * @param {string} username
 * @param {string} password
 */
Cypress.Commands.add('login', (username = '', password = '') => {
  cy.log('A FAZER LOGIN POR COMMAND')
  cy.get('#username').clear().type(username)
  cy.get('#password').clear().type(password)
  cy.get('.fa').click()
})

export default executeCommand
