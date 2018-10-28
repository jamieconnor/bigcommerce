// https://docs.cypress.io/api/introduction/api.html

describe('Basic Tests', () => {
  it('Visits the app root url', () => {
    cy.visit('');
    cy.contains('h1', 'What\'s for Lunch?');
  });

  it('Ingredients loaded', () => {
    // Enable response stubbing.
    cy.server();
    // Route the API request to a stubbed response.
    cy.route({
      method: 'GET',
      url: '/ingredients.json',
      response: require('../stubs/ingredients.json'),
    });
    cy.visit('');
    cy.contains('.ingredients li', 'Ham');
  });

  it('Recipes loaded', () => {
    // Enable response stubbing.
    cy.server();
    // Route the API request to a stubbed response.
    cy.route({
      method: 'GET',
      url: '/ingredients.json',
      response: require('../stubs/ingredients.json'),
    });
    cy.route({
      method: 'GET',
      url: '/recipes.json',
      response: require('../stubs/recipes.json'),
    });
    cy.visit('');
    cy.get('h1').click();
    cy.contains('.yummy h2', 'You Can Make This (yummy)');
    cy.contains('.stinky h2', 'You Can Make This (stinky)');
    cy.contains('.stinky li', 'Ham and Cheese Toastie');
  });

  it('About page', () => {
    // Enable response stubbing.
    cy.visit('/about');
    cy.contains('.about', 'This site was made by');
  });
})
