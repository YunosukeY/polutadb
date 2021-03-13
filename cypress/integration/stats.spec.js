describe('統計情報', () => {
  it('sentence', () => {
    cy.visit('/stats');
    cy.contains('Genres');
    cy.contains('Artists');
    cy.contains('Songs');
  });
});
