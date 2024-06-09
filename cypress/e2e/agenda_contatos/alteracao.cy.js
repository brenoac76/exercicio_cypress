describe('Teste para a alteração de dados', () => {
    it('Deve alterar um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.contains('Breno Costa').get('.edit').click({ multiple: true })
       
        cy.get('[type="text"]').clear().type('Breno Costa editado')
        cy.get('[type="email"]').clear().type('Teste1editado@gmail.com')
        cy.get('[type="tel"]').clear().type('(12)12345-4321')
        cy.get('.alterar').click()

        cy.contains('Breno Costa editado').should('be.visible');
        
    })
} ) 