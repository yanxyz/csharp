# C# partial keyword

[Partial Classes and Methods (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/partial-classes-and-methods)

通过 partial keyword 可以将 class, struct, interface, method 的定义分拆到多个文件中。compiler 会将它们合并为一个定义。

典型例子如 WinForms, WPF 等程序。

分拆的没有片段都要使用 partial keyword，并且 accessibility 一致。

其中有一个片段指定了下面关键字，其它片段可以省略

- public, protected, private, internal
- abstract
- sealed
- base class
- new modifier
- generic constraints

## partial methods

partial type 可以包含 partial method。

partial method，比如一个 class 片段包含 method 签名；另一个 class 片段包含 method 实现。如果只有签名而没有实现，compiler 将删除它，即使调用了它也不会产生错误。

partial method 必须返回 void。

partial method 是隐式的 private，这意味着不能使用 access modifiers，virtual 等。

```cs
// Definition in file1.cs
partial void onNameChanged();

// Implementation in file2.cs
partial void onNameChanged()
{
  // method body
}
```

