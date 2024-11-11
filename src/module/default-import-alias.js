// デフォルトエクスポートをmyModuleとしてインポートする
import { default as myModule } from "./default-export-my-module.js";
console.log(myModule); // => { baz: 'baz' }
