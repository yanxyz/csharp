---
permalink: /lang/accessibility/
---

# C# Access Modifiers

[Access Modifiers (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers)

modifier  | scope
--------- | -----
public    | 任何地方
private   | 同一 class/struct
protected | 同一 class/struct，以及 derived class
internal  | 同一 assembly
protected internal | 同一 assembly，以及其它 assembly 内的 derived class。

classes, structs 可以使用 public, internal。默认是 internal。

nested classes/structs 是 classes/structs 的成员，和其它成员一样，默认是 private。

structs 不能继承，所以它的成员不可以使用 protected, protected internal。

代码规范，access modifiers 写在最开始，最好不要省略 private。

## friend assembly

<https://msdn.microsoft.com/en-us/library/mt632254>

借助于 InternalsVisibleToAttribute，AssemblyB 可以测试 AssemblyA 中的 internal classes/members。

```cs
using System.Runtime.CompilerServices;
using System;

[assembly: InternalsVisibleTo("AssemblyB")]

// The class is internal by default.
class FriendClass
{
    public void Test()
    {
        Console.WriteLine("Sample Class");
    }
}

// Public class that has an internal method.
public class ClassWithFriendMethod
{
    internal void Test()
    {
        Console.WriteLine("Sample Method");
    }

}
```
