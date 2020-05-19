beforeEach(() => {
  cy.visit('http://localhost:4200/');
  cy.server();
});

describe('articles-page', () => {
  it('should url redirect to articles page', () => {
    cy.fixture('userOk.json').then(userOk => {
      cy.route('/assets/json/users/**', userOk);
      cy.get('#tz').clear().type(userOk.tz);
      cy.get('button[type=submit]').click();
    });
  });
});
