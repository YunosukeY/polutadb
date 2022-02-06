// TODO: 検索結果のテスト

describe('検索', () => {
  it('sentence', () => {
    cy.visit('/');
    cy.contains('Search'); // TODO
    cy.contains('Result');
  });
});
