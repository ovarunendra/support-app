describe('Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  context('When page is initially opened', function() {
    it('should have title as "Support App"', () => {
      cy.title().should('eq', 'Support App');
    });
    it('should have heading as "Reading List"', function() {
      cy.get('h1').should('have.text', 'Reading List');
    });
    it('should show "No Book Selected"', () => {
      cy.get('#book-details > div').should('have.text', 'No Book Selected');
    });
    it('should render book list', () => {
      cy.get('li').should('have.length', 2);
    });
    it('should have add button', () => {
      cy.get('button').should('have.length', 1);
      cy.get('button').should('have.text', '+');
    });
  });
});
