describe('リリースノート', () => {
  it('sentence', () => {
    cy.visit('/releases');
    cy.contains('Release Notes');
  });
});
