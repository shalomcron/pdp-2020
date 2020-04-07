const tzOk = '111';
const tzWrong = '666';
let i = 0;

before(() => {
});
beforeEach (() => {
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
  it('should submit correctly', () => {
    cy.route('/assets/json/users/' + tzOk + '**', 'fixture:userOk.json');
    cy.get('#tz').clear().type(tzOk);
    cy.get('button[type=submit]').click();
    cy.url().should('contain', 'personal-greeting');
  });
  it('should submit incorrectly', () => {
    cy.route({url: '/assets/json/users/' + tzWrong + '**', force404: true});
    cy.get('#tz').clear().type(tzWrong);
    cy.get('button[type=submit]').click();
    cy.url().should('contain', 'log-in');
    cy.get('div.load-data-msg').should('have.class', 'err-accrued');
  });
});
// cy.route('/personal-greeting**', 'fixture:userOk.json');
// cy.server({
//   method: 'POST',
//   delay: 1000,
//   status: 422,
//   response: {}
// })

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
