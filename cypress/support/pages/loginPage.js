class LoginPage {
  login(username, password) {
    cy.log('A FAZER LOGIN')
    cy.get('#username').clear().type(username)
    cy.get('#password').clear().type(password)
    cy.get('.fa').click()
  }

  assertLoginSucesso() {
    cy.log('test log')
    cy.get('#flash').click().should('be.visible')
    cy.get('#flash').should('contain.text', 'You logged into a secure area!')
    cy.url().should('include', '/secure')
  }

  assertLoginFalhou() {
    cy.get('#flash').click().should('be.visible')
    cy.get('#flash').should('contain.text', 'Your password is invalid!')
    cy.url().should('include', '/login')
  }
}

export default LoginPage
