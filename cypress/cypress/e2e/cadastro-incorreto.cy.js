    import Cadastro from 'C:\Users\PC\Documents\Estudos\Javascript-alura\Cypress\support\pages\cadastro\pagina-cadastro.js'
    
    describe('Página de cadastro', () => {
      beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })
      it('Preencher os campos do formulário de forma incorreta', () => {

        // cy.get('[data-teste="register"]').click();
        // cy.get('input[data-test="email"]').type('lllll@lll.com');
        // cy.get('input[data-test="fullName"]').type('Lllll Lllll');
        // cy.get('input[data-test="registerUserName"]').type('lllllllll');
        // cy.get('input[data-test="registerPassword"]').type('LllllLllll');
        // cy.get('[data-test="btnRegister"]').click();
        Cadastro.acessarPaginaCadastro();
        Cadastro.preencherFormulario();
        Cadastro.submeterCadstro();

      })
    })
  