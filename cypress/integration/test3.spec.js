/// <reference types="cypress" />

import LoginPage from '../support/pages/loginPage'

describe('Testes Gerais', () => {
  const loginPage = new LoginPage()

  context('Testes de login', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('login sucesso', () => {
      // loginPage.login('tomsmith', 'SuperSecretPassword!')
      cy.login('tomsmith', 'SuperSecretPassword!')
      loginPage.assertLoginSucesso()
    })

    it('login erro', () => {
      cy.login('tomsmith', '123456')
      loginPage.assertLoginFalhou()
    })

    it('Test then async and manipulation', () => {
      cy.get('.subheader')
        .invoke('text')
        .then((text) => {
          expect(text).equal(
            'This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.'
          )
        })
    })
  })

  context('Random testes', () => {
    it('Test random 1', { tags: ['@smoke'] }, () => {
      expect(1).to.be.equal(1)
    })

    it('Test random 2', { tags: ['@smoke'] }, () => {
      expect(2).to.be.equal(2)
    })

    it('Test random 3', { tags: ['@integration'] }, () => {
      expect(3).to.be.equal(3)
    })

    it('Test random 4', { tags: ['@integration'] }, () => {
      expect(4).to.be.equal(4)
    })
  })
})
