describe('共通レイアウト', () => {
  it('header', () => {
    // TODO
    cy.visit('/');

    cy.get('#searchButton').click();
    cy.location('pathname').should('eq', '/search');

    cy.get('#favosButton').click();
    cy.location('pathname').should('eq', '/favos');

    cy.get('#statsButton').click();
    cy.location('pathname').should('eq', '/stats');

    cy.get('#releasesButton').click();
    cy.location('pathname').should('eq', '/releases');

    cy.get('#homeButton').click();
    cy.location('pathname').should('eq', '/');
  });

  it('footer', () => {
    cy.visit('/stats');
    cy.contains('Links');
    cy.contains('原曲プレイリスト（Spotify）');
    cy.contains('管理人Twitter');
    cy.contains('© 2020 ぽるうたデータベース');
  });
});
