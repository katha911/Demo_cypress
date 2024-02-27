/// <reference types="cypress" />

context('Calculator', () => {
  beforeEach(() => {
    cy.visit('www.google.com') 
    
  })

  it('Login', () => {
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('admin02')
    cy.get(':nth-child(4) > .el-form-item__content > .el-input > .el-input__inner').type('123456')
    cy.get('#submitbuttonLogin').click()
})
})