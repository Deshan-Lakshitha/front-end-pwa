describe('Admin Login E2E', () => {

    it('Admin login starting from admin login page', () => {
      cy.visit('http://localhost:3000/admin-login')
      cy.contains('Log in').click()
      cy.contains('Log in')

      // Input email and password
      cy.get('[id="Email"]').type('adminone@fuelq.com').should('have.value', 'adminone@fuelq.com')
      cy.get('[id="Password"]').type(Cypress.env('admin_password')).should('have.value', Cypress.env('admin_password'))
      cy.contains(/Proceed/i).click()
    })

    it('Vehicle owner login starting from home', () => {
      cy.visit('http://localhost:3000/')
      cy.contains(/vehicle owner login/i).click()
      cy.contains('Log in')

      // Input email and password
      cy.get('[id="Email"]').type(Cypress.env('vo_email')).should('have.value', Cypress.env('vo_email'))
      cy.contains(/Proceed/i).click()
      cy.contains(/Proceed/i)
    })

    
  }) 