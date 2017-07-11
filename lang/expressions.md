---
permalink: /lang/expressions/
---

# C# Expressions

[Expressions](https://docs.microsoft.com/en-us/dotnet/articles/csharp/tour-of-csharp/expressions)

Type testing 类型检测

```cs
x is T // 若 x 是 T 的实例则返回 true, 否则返回 false
x as T //  Return x typed as T, or null if x is not a T
```

Null coalescing Null 合并

```cs
x ?? y // 若 x 为 null 则结果为 y，否则结果为 x。
```

操作符可以重载。
