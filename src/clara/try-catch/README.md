## エラーオブジェクトとは何か (throw 文との関係性を含めて説明すること)

エラーオブジェクトは`new Error("エラーメッセージ")`で作成できる  
throw 文は try-catch 文でエラーオブジェクトを例外として投げることができる

投げられたエラーオブジェクトは catch 節から取得できる  
渡したエラーメッセージは message プロパティで参照できる

```
try{
  throw new Error("エラーメッセージ");
} catch(error){
  console.log(error.message); // => "エラーメッセージ"
}
```

throw 文は基本的に Error オブジェクトを投げることを推奨する。（スタックトレースのため）

## 次のコードのうち、catch 節が実行される可能性があるものを選択すること

(1) 実行される

```
try {
  throw new Error("hello");
} catch (error) {
  console.error(error);
}
```

(2) 実行される

```
try {
  console.log(y);
} catch (error) {
  console.error(error);
}
```

(3) 実行されない

```
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

try {
  await sleep(1000);
  console.log("hello");
} catch (error) {
  console.error(error);
}
```

(4) 実行されない  
memo: await は async とペアだと思っていたから syntax エラーだと思ったが、json のデータが取れている

```
try {
  const response = await fetch("https://httpbin.org/json");
  const json = await response.json();
  console.log(json);
} catch (error) {
  console.error(error);
}
```

(5) 実行される

```
try {
  const foo = const bar = 2;
} catch (error) {
  console.error(error)
}
```

## 次のコードの問題点を回答すること

関数 `doAwesomeThing` で作成したエラーオブジェクトが関数 `main` の catch 節で新たな Error オブジェクトを throw しているため、本来のエラーのスタックトレースである`"something wrong..."`が失われている

```
function main() {
  try {
    doAwesomeThing();
  } catch (error) {
    throw new Error("Error happens at `doAwesomeThing`");
  }
}

main(); // => "Error happens at `doAwesomeThing`"

function doAwesomeThing() {
  throw new Error("something wrong...");
}
```

## スタックトレースとは何か

プログラムの実行過程を記録した内容で、どの処理によってエラーが発生したかが記録されている
これによってどこでエラーが発生しているのかをエラーメッセージで確認することができる

## finally 節とは何か

finally 節は、try ブロック内で例外が発生したかどうかに関わらず、必ず try 文の最後で実行される  
catch 節と finally 節のうち、片方が存在していれば、もう片方の節は省略できる。finally 節のみを書いた場合は例外がキャッチされないため、finally 節を実行後に例外が発生する。

# 追加課題

## 以下をスタックトレースできるように書き換える

```
function main() {
  try {
    doAwesomeThing();
  } catch (error) {
    throw new Error("Error happens at `doAwesomeThing`");
  }
}

main();

function doAwesomeThing() {
  throw new Error("something wrong...");
}
```

cause オプションを追加して本来のスタックトレースを保持する

```
function main() {
  try {
    doAwesomeThing();
  } catch (error) {
    throw new Error("Error happens at `doAwesomeThing`", {cause: error});
  }
}

main();

function doAwesomeThing() {
  throw new Error("something wrong...");
}
```

## 次のコードをローカルサーバーと https://example.com/ のそれぞれにアクセスして実行すると、何が違うかを回答すること (違いが起きる原因も調べて回答すること)

```
const response = await fetch("https://example.com/");
const text = await response.text();
console.log(text);
```

- https://example.com/　で実行した時

```
<!doctype html>
<html>
<head>
    <title>Example Domain</title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
    body {
        background-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

    }
    div {
        width: 600px;
        margin: 5em auto;
        padding: 2em;
        background-color: #fdfdff;
        border-radius: 0.5em;
        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
    }
    a:link, a:visited {
        color: #38488f;
        text-decoration: none;
    }
    @media (max-width: 700px) {
        div {
            margin: 0 auto;
            width: auto;
        }
    }
    </style>
</head>

<body>
<div>
    <h1>Example Domain</h1>
    <p>This domain is for use in illustrative examples in documents. You may use this
    domain in literature without prior coordination or asking for permission.</p>
    <p><a href="https://www.iana.org/domains/example">More information...</a></p>
</div>
</body>
</html>

```

- ローカルサーバー(MAMP を起動して[localhost](http://localhost/))で実行した時

```
localhost/:1 Access to fetch at 'https://example.com/' from origin 'http://localhost' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

翻訳すると、`「https://example.com/」で取得するアクセスが CORS ポリシーによってブロックされました`となっている。  
CORS => Cross-Origin Resource Sharing の略

## 違いが起きる原因は何か

同一オリジンポリシー（Same-Origin Policy：SOP）の条件に当てはまっていないから。
`https://example.com/`にアクセスして、`fetch("https://example.com/")`することはできる（同一オリジンのため）が、異なるオリジン（クロスオリジン）である`localhost`からでは`fetch("https://example.com/")`することはできない。

### 同一オリジンポリシー？

あるオリジンから取得したリソースから、別のオリジンのリソースへのアクセスを禁止するブラウザの機能のこと。
オリジンとは、Web コンテンツにアクセスするために使われる URL のスキーム（プロトコル）、ホスト（ドメイン）、ポート番号によって定義されるもの。  
今回の問題の場合だと、`https://example.com/`がオリジン  
同一オリジンポリーによって、悪意のある可能性のあるウェブサイトからの攻撃を防ぐことができる。

### CORS(Cross-Origin Resource Sharing)

CORS は、クロスオリジン（異なるオリジン）からでもリソースを要求できる仕組み。  
異なるオリジンからのリソースを読み込むには、バックエンド側で`Access-Control-Allow-Origin`とレスポンスに設定する必要がある。
また、CORS はシンプルリクエストとぷりフライトリクエストの 2 つの異なるリクエストタイプを定義しており、それぞれサーバー側で適切な HTTP ヘッダーを設定する必要がある。
