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
