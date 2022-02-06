describe('リリースノート', () => {
  it('sentence', () => {
    cy.visit('/releases');
    cy.contains('Latest Release Note');
    cy.contains('Old Release Notes');
  });
});
