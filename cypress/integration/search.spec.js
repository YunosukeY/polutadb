// TODO: 検索結果のテスト

describe('検索', () => {
  it('sentence', () => {
    cy.visit('/search');
    cy.contains('Search'); // TODO
    cy.contains('Result');

    cy.contains('全文検索');
    cy.contains('曲のジャンルを選択');
    cy.contains('枠のタイプを選択');
    cy.contains('動画を選択');
    cy.contains('曲を選択');
    cy.contains('アーティストを選択');
    cy.contains('伴奏');
    cy.contains('伴奏あり');
    cy.contains('なし（アカペラ）');
    cy.contains('尺');
    cy.contains('フル尺');
    cy.contains('ワンコーラス');
    cy.contains('表示件数');
    cy.contains('5件');
    cy.contains('10件');
    cy.contains('20件');
    cy.contains('50件');
    cy.contains('表示形式');
    cy.contains('通常表示');
    cy.contains('簡易表示');
    cy.contains('ソート');
    cy.contains('時系列順');
    cy.contains('曲名順');
    cy.contains('アーティスト名順');
  });
});
