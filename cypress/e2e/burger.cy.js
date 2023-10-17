describe('ingredient logic', () => {
  const email = 'QWeretyryryryQWeretyryryry@QWeretyryryry.ru ';
  const password = 'QWeretyryryryQWeretyryryry';

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should open ingredient details modal and colse it after 3 sec', () => {
    cy.get('a[href="/ingredients/643d69a5c3f7b9001cfa0943"]').click();
    cy.wait(3000);
    cy.get('body').type('{esc}');
  });

  it('should darg ingredient to burger constructor', () => {
    cy.get('[data-id=user-profile]').click();
    cy.get('[data-id=email_input]').type(`${email}`);
    cy.get('[data-id=password_input]').type(`${password}`);
    cy.get('[data-id=login-button]').click();
    cy.wait(500);
    cy.get('a[href="/ingredients/643d69a5c3f7b9001cfa093d"]').drag(
      '[data-bunid=drop-bun-area]'
    );
    cy.get('a[href="/ingredients/643d69a5c3f7b9001cfa0942"]').drag(
      '[data-id=drop-area]'
    );
    cy.get('[data-id=checkout]').click();
    cy.wait(500);
  });
});
