import 'cypress';

describe('Test Suite', () => {
    it('Should visit loginpage', () => {
        cy.visit('http://localhost:3000/login');
    })
})