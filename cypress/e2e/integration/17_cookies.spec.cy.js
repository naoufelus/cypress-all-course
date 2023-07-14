it('Get cookie', () => {
  cy.visit('cypress/index.html');
  cy.getCookie('course').should(
    'have.property',
    'value',
    'cypress'
  );
});

it('Set cookie', () => {
  cy.visit('cypress/index.html');
  cy.setCookie('level', 'all levels');
});

it.only('get all cookies', () => {
  cy.visit('cypress/index.html');
  cy.getCookies().should('have.length', 2);
});
