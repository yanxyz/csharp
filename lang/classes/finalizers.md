---
permalink: /lang/finalizers/
---

# C# Finalizers

[Finalizers (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/destructors)

finalizers 也称为 destructors。

只用于 classes, 不能用于 structs。每个 class 只能有一个。

名字为 `~ClassName`，没有参数，access modifiers，返回值。

程序无法调用，由 garbage collector 自动执行。

```cs
using System;

public class Destroyer
{
    public override string ToString() => GetType().Name;

    // expression-bodied
    ~Destroyer() => Console.WriteLine($"The {ToString()} destructor is executing.");
}
```

finalizer 会隐式调用基类的 finalizer，一条继承链将形成一个 finalizer queue，从最近基类到最远基类依次调用。
