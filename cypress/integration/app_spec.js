describe('Test', () => {
  beforeEach(() => {
    cy.server();
    cy.visit('http://localhost:8080/');
  });

  context('When page is initially opened', function() {
    it('should have heading as "Reading List"', function() {
      cy.get('h1').should('have.text', 'Reading List');
    });
    it('should render book list', () => {
      cy.get('li').should('have.length', 2);
    });
  });
});
