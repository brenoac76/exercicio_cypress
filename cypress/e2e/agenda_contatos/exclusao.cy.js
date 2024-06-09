describe('Teste para a exclusão de dados', () => {
    it('Deve excluir um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.contains('Breno Costa').get('.delete').click({ multiple: true })
        
        
    })
} ) 