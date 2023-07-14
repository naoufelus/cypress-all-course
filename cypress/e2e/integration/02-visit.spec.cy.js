it('should be able to visit a website correctly', () => {
  // with visit command we can go to a normal website, or localhost or any HTML file in the system
  // Cypress recommends to set the baseURL in cypress.json file
  // We can add a second argument to the visit command, and this argument is an object.
  // Inside the object we add our options.
  // Url for the document https://docs.cypress.io/api/commands/visit#Arguments

  cy.visit('/search', {
    qs: {
      q: 'cypress',
      hatem: 'qacart',
    },
  });
});
