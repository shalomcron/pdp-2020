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
    // cy.route('/assets/json/users/**', {aa: 'AA'});
    cy.route({
      url: '/assets/json/users/**',
      status: 404,
      response: {},
    });
    cy.get('#tz').clear().type('123');
    cy.get('button[type=submit]').click();
    cy.url().should('contain', 'log-in');
    cy.get('div.load-data-msg').should('have.class', 'err-accrued');
  });

  // it('should submit correctly', () => {
  //   cy.fixture('userOk.json').as('userOk')
  //   cy.route('/assets/json/users/**', '@userOk')
  //   cy.get('#tz').clear().type(222);
  //   cy.get('button[type=submit]').click();
  //   // cy.url().should('contain', 'personal-greeting');
  //   // cy.get('[data-test-id="name"]').should('contain', '@userOk');
  // });

  it('should submit correctly', () => {
    cy.fixture('userOk.json').then(userOk => {
      cy.route('/assets/json/users/**', userOk);
      cy.get('#tz').clear().type(userOk.tz);
      cy.get('button[type=submit]').click();
      cy.url().should('contain', 'personal-menu');
      cy.get('[data-test-id="user-name"]').should('contain', userOk.name);
    });
  });
});

// cy.route('/users/', { errors: 'Name cannot be blank' })
// describe('personal greeting page', () => {
//   it('should url change after log in button click', () => {
//     cy.get('#tz').clear().type(tz);
//     cy.get('button[type=submit]').click();
//     cy.url().should('contain', 'personal-greeting');
//   });
//
//   it('should load personal greeting page', () => {
//     cy.get('.personal-greeting').should('be.visible')
//   });
//
// it('should personal greeting page display "MY_NAME" name', () => {
//   cy.get('h1.name').should('be.visible')
// });
// });
