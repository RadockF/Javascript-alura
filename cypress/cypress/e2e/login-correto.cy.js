describe('Página de login', () => {

  beforeEach(()=> {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
  })

    it('Preencher os campos do formulário corretamente para poder logar', () => {
      cy.login('victor','victor31')
    })
  })
