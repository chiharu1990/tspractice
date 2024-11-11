// グローバル変数を操作する（副作用）
window.foo = "foo";

// ./side-effects.jsのグローバルコードが実行される
import "./side-effects.js";
