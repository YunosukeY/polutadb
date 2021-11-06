describe('トップページ', () => {
  it('sentence', () => {
    cy.visit('/');
    cy.contains('About');
    cy.contains(
      'PolutaDB（ぽるうたデータベース）では，ホロライブ所属の VTuber 尾丸ポルカさんの歌を検索することができます．',
    );
    cy.contains('尾丸ポルカさんについてはこちら！');
    cy.contains('YouTube：Polka Ch. 尾丸ポルカ');
    cy.contains('諸注意');
    cy.contains('・表示件数を増やすと重くなる場合があります．');
    cy.contains('・お気に入り情報はブラウザに保存されるため，キャッシュクリアにご注意ください．');
    cy.contains('・本サイトは有志による非公式サイトです．不具合，ご要望は管理人Twitterまでご連絡ください．');
    cy.contains('Search');
    cy.contains('Favorites');
    cy.contains('Statistics');
    cy.contains('Release Notes');
  });

  it('カードでの遷移（検索）', () => {
    cy.visit('/');
    cy.contains('Search').click();
    cy.location('pathname').should('eq', '/search');
  });

  it('カードでの遷移（お気に入り）', () => {
    cy.visit('/');
    cy.contains('Favorites').click();
    cy.location('pathname').should('eq', '/favos');
  });

  it('カードでの遷移（統計）', () => {
    cy.visit('/');
    cy.contains('Statistics').click();
    cy.location('pathname').should('eq', '/stats');
  });

  it('カードでの遷移（リリースノート）', () => {
    cy.visit('/');
    cy.contains('Release Notes').click();
    cy.location('pathname').should('eq', '/releases');
  });
});
