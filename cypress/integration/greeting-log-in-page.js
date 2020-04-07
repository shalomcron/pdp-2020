const tz = '12345';

describe('log-in-page', () => {
  it('should visit greeting page', () => {
    cy.visit('http://localhost:4200/');
  });

  it('should url redirect to log in page', () => {
    cy.url().should('include', 'log-in');
  });

  it('should log-in page include input and button', () => {
    cy.get('#tz').should('be.visible');
    cy.get('button[type=submit]').should('be.visible');
  });
});

describe('personal greeting page', () => {
  it('should url change after log in button click', () => {
    cy.get('#tz').clear().type(tz);
    cy.get('button[type=submit]').click();
    cy.url().should('contain', 'personal-greeting');
  });

  it('should load personal greeting page', () => {
    cy.get('.personal-greeting').should('be.visible')
  });

  // it('should personal greeting page display "MY_NAME" name', () => {
  //   cy.get('h1.name').should('be.visible')
  // });
});
