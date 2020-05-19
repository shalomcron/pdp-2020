before(() => {
});

beforeEach(() => {
  cy.visit('http://localhost:4200/');
  cy.server();
});

describe('Log-in page loading', () => {
  it('should url redirect to log in page', () => {
    cy.url().should('include', 'log-in');
  });
  it('should log-in page include input and button', () => {
    cy.get('#tz').should('be.visible');
    cy.get('button[type=submit]').should('be.visible');
  });
});

describe('Log-in page submit', () => {
  it('should submit incorrectly', () => {
    cy.route({
      url: '/assets/json/users/**',
      status: 404,
      response: {},
    });
    cy.get('#tz').clear().type('123');
    cy.get('button[type=submit]').click();
    cy.url().should('contain', 'log-in');
    cy.get('[data-cy=load-data-msg]').should('have.class', 'err-accrued');
  });

  it('should submit correctly', () => {
    cy.fixture('userOk.json').then(userOk => {
      cy.route('/assets/json/users/**', userOk);
      cy.get('#tz').clear().type(userOk.tz);
      cy.get('button[type=submit]').click();
      cy.get('[data-greeting="user-name"]').should('contain', userOk.name);
    });
  });
});

