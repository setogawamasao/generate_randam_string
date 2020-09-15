### セットアップ

1.typescript をグローバルインストール  
　 npm install -g typescript

2.package.json のモジュールをインストール  
　 npm install

### ビルド

tsc main.ts

-> main.js ができる

### 実行

node main.js

### 実行結果サンプル(5 文字)

uint8array  
Uint8Array(5) [ 0, 0, 0, 0, 0 ]

randamUint8array  
Uint8Array(5) [ 205, 107, 247, 20, 56 ]

randamNumberArray  
[ 205, 107, 247, 20, 56 ]

randomStringArray  
[ 'z', '9', '5', 'u', 'u' ]

final result : z95uu
