// TODO: お気に入り情報に応じた結果

describe('お気に入り', () => {
  it('sentence', () => {
    cy.visit('/favos');
    cy.contains('Favorite');
    cy.contains('表示件数');
    cy.contains('5件');
    cy.contains('10件');
    cy.contains('20件');
    cy.contains('50件');
    cy.contains('表示形式');
    cy.contains('通常表示');
    cy.contains('簡易表示');
  });
});
