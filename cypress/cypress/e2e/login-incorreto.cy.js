describe('Página de login', () => {

  beforeEach(()=> {
  
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')

    cy.intercept('POST','https://alurapic-api.onrender.com/user/login', {
      statusCode: 401
    }).as('stubPost')
  
  })

    it('Verificar mensagem de campos obrigatórios', () => {
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
  
    });

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
      cy.login('victor','victor31');
      cy.wait('@stubPost')
  });
})
