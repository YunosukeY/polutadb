# 設計

## データ
フロントエンドだけで完結させるためにDBは使っていない．  
代わりに/src/data.ts中に埋め込んでいる．  
データの持ち方は以下のように正規化していて，外部キーは添字を持つことで表現している．

<img src="./fig/ER.png" width="50%">

## Reactのcomponent, state

- ページは，Select以下のコンポーネントの変化によっても変わるので，状態をTopで持つ

<img src="./fig/component.png" width="50%">