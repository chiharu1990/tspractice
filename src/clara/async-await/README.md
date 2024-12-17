## await 式とは何か

await 式は主に非同期関数内で使われる式で、Promise が解決するのを待つために使う。await 式を使うことで、非同期処理が同期処理のように上から下へと順番に実行するような処理順で書くことができる。

### await 式を用いた例

```
const someAsyncFunction = () => {
  return Promise.resolve(1);
};

async function example(){
  const result = await someAsyncFunction();
  console.log(result); // => 1
}
example();
```

await は`someAsyncFunction()`が返す Promise が解決されたら、結果を result に代入する。  
関数の実行は`someAsyncFunction()`が解決するまで一時停止し、その後に続くコードが実行される。

## Promise とは何か (どのような利点があるかも説明すること。また、Promise を使ったコード例を 1 つ書くこと)

Promise とは、非同期処理を扱うときのオブジェクトで、非同期処理の完了、または失敗に応じて結果が返される  
Promise の利点は、複数の非同期処理を行うときにコールバック関数をネストして記述する（コールバック地獄）ことなく、`.then`を用いてチェーンで繋いで読みやすい形で表現できることがあげられる。

### Promise を用いた例

```
const promiseFunc = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(3);
      resolve("成功しました");
    }, 1000);
  });
};

promiseFunc().then((res) => {
  console.log(res);
});

```

`promiseFunc`関数は Promise を返す関数で、`setTimeout`を使って 1 秒後に`resolve`が呼ばれる  
`promiseFunc().then`で Promise が解決された時の処理が実行される

## 次のコードの問題点を回答すること (また、改善する方法も回答すること)

```
try {
  setTimeout(() => {
    throw new Error("エラー");
  }, 0);
} catch (error) {
  console.error(error);
}

```

### このコードの問題点

非同期処理の時、try-catch 構文を使っても非同期的に発生した例外をキャッチできない

### 改善する方法

setTimeout のコールバック関数内で同期的なエラーとしてキャッチする

```
setTimeout(() => {
  try{
    throw new Error("エラー");
  } catch (error) {
    console.log(error);
  }
}, 10);
```

## Async Function とは何か

Async Function は関数の定義に`async`キーワードをつけることで定義する。Async Function として定義された関数は Promise オブジェクトを返す  
Promise と比較して、記述がより直感的で分かりやすく、非同期処理を同期的な処理のように書くことができるのが特徴
Async Function で定義された関数内では、await 式を使って Promise が解決されるまで処理を待ち、状態が変更すると次の行の処理を再開する。

## 次のコードを sleep に対応するコードを記入すること

```
await sleep(1000);
console.log("1秒後に実行する"); // 上記のsleep関数で1秒経過した後に、こちらのconsole.log()を実行する
```

```
function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1秒後に実行する");
      resolve();
    }, time);
  });
}
async function sleepExecution() {
  await sleep(1000);
}
sleepExecution();
```

## https://httpbin.org/json に fetch API を使ってリクエストし、fetch API でエラーが発生した際には「通信でエラーが発生しました。しばらく経ってから再度お試しください」というエラーを Console に出力するコードを書く

```
const url = "https://httpbin.org/json";
fetch(url)
  .then(() => {
    console.log("成功");
  })
  .catch(() => {
    console.log("通信でエラーが発生しました。しばらく経ってから再度お試しください");
  });
```
