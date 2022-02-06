// TODO: お気に入り情報に応じた結果

describe('お気に入り', () => {
  it('sentence', () => {
    cy.visit('/favos');
    cy.contains('Favorite');
  });
});
