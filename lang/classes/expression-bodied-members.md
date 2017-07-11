---
permalink: /lang/expression-bodied-members/
---

# Expression-bodied members

[Expression-bodied members (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/expression-bodied-members)

invocable members(function members):

- method
- property get, set
- indexer
- constructor
- finalizer

当这些成员的 body 只有一个表达式时，可以用下面语法

```cs
member => expression;
```

不需要使用 return。
