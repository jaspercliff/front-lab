// 命名导出 这里必须对应 
import { sayHello } from "./utils.js";
//可以起别名
import { sayHello as hi } from "./utils1.js";
// 默认导出 默认导出的名称可以自己取
import test from "./default.js"

sayHello("jasper")
hi("jasper")
test()
