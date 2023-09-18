    describe('Página de cadastro', () => {
      it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
        cy.contains('a', 'Register now').click();
        cy.get('[data-test="email"]').type('victor.picelli@cerusbank.com');
        cy.get('[data-test="fullName"]').type('Victor Picelli');
        cy.get('[data-test="registerUserName"]').type('victor');
        cy.get('[data-test="registerPassword"]').type('victor31');
        cy.contains('button', 'Register').click();
      })
    })
  