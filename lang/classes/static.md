---
permalink: /lang/static/
---

# C# static modifier

static modifier 可以用于 classes, 以及除 constants, indexers, destructors 之外的 class members。

static classes 所有的成员都必须是 static。

## Static Members

constants 已经相当于 static fields。

### Static constructors

[Static Constructors (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/static-constructors)

static constructors 初始化 static members，或者执行只需要操作一次的动作，比如写入日志。

在第一个实例创建之前或者在引用 static members 时自动调用。

static constructors 不能有 access modifiers 和参数。程序无法直接调用它们。
