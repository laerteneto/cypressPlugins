/**
 * ALL COMMANDS IN THIS FILE ARE LOCATED IN: cypress/support/commands.js
 * THIS FILE IS JUST AN ALIAS TO AVOID THE TS-2339 error cause by the TypeScript compiler
 *
 * THEREFORE, FOR EACH COMMAND CREATED IN cypress/support/commands.js, we need to add this interface in here with the same method name and parameters.
 */

// Ignore any warning error in namespace in case it happens (It is expected to happen due to the TS compiler we are using in this project)
declare namespace Cypress {
  interface Chainable {
    login(username: string = '', password: string = ''): Chainable<Element>
  }

  interface Chainable {
    toMatchImageSnapshot(): Chainable<Element>
  }
}
