---
permalink: /lang/partial/
---

# C# partial keyword

[Partial Classes and Methods (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/partial-classes-and-methods)


通过 partial keyword 可以将 class, struct, interface, method 的定义分拆到多个文件中。compiler 会将它们合并为一个定义。

典型例子如 WinForms project

```cs
// Form1.Designer.cs，由 code generator 自动生成的代码
partial class Form1

// Form1.cs
public partial class Form1 : Form
```

## partial methods

partial type 可以包含 partial method。

partial method 如果只有定义而没有实现，compiler 将删除它，即使调用了它也不会产生错误。

partial method 必须返回 void。

partial method 不能有 access modifiers, virtual, abstract, override, new, sealed, extern modifiers。
这意味着 partial method 是 private。

```cs
// Definition in file1.cs
partial void onNameChanged();

// Implementation in file2.cs
partial void onNameChanged()
{
  // method body
}
```

