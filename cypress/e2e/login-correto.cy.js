describe('Página de login', () => {
    it('Preencher os campos do formulário corretamente para poder logar', () => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
      cy.get('[data-test="loginUserName"]').type('victor');
      cy.get('[data-test="loginPassword"]').type('victor31');
      cy.contains('button', 'login').click();
    })
  })
