## エラーオブジェクトとは何か (throw 文との関係性を含めて説明すること)

エラーが発生した時に catch 文で拾うことができるオブジェクト。
`new Error()`で作成できる  
throw 文と使うことで、try-catch 文で例外を投げることができる。

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

(4) 実行される

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

関数 `doAwesomeThing` で作成したエラーオブジェクトの中身が関数 `main` の catch 節で上書きされてしまい、本来のエラーメッセージである`"something wrong..."`が参照できないこと。

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

## スタックトレースとは何か

## finally 節とは何か

try-catch 文において、try で実行した結果がエラーであってもそうでなくても finally 節は必ず実行される。
