describe('aliase', () => {
  before(() => {
    cy.visit('cypress/index.html');
    cy.url().as('url');
  });

  it('Aliases in Cypress', () => {
    cy.get('@url').should('contain', 'index.html');
  });

  it('Aliases in Cypress', () => {
    cy.get('@url').should('contain', 'index.html');
  });
});
