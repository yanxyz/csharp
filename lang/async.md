# C# 使用 async 和 awati 异步编程

`async` modifier 标记 method, lambda expression, anonymous method 是异步的，不过如果它们没有使用 `await` 表达式，则同步执行，compiler 会给出一条 warning。

按惯例 async method 的名字以 Async 结尾。

async method 的 return type 只能是

- void, 常用于 event handler
- Task<TResult>
- Task，没啥意义，可以理解为 Task(void)

Task-based Asynchronous Pattern (TAP)


async and await relying on the INotifyCompletion interface,
