//focus

it('Focus command', () => {
  cy.visit('cypress/index.html');
  cy.get('.focus').focus();
});

it.only('Blur command', () => {
  cy.visit('cypress/index.html');
  cy.get('.focus').focus();
  cy.get('.focus').blur();
});
