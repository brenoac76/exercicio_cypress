describe('Teste para a inclusão de dados', () => {
    it('Deve incluir um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('input').should('have.length', 3)
        cy.get('[type="text"]').type('Breno Costa')
        cy.get('[type="email"]').type('Teste1@gmail.com')
        cy.get('[type="tel"]').type('(12)12345-1234')
        cy.get('.adicionar').click()
               
    })
} ) 