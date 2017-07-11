---
permalink: /lang/fields/
---

# C# Fields

[Fields (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/fields)

Fields 是在 class/struct scope 内声明的变量。

Fields 的访问权限通常为 private 或 protected，然后由 properties，methods, indexers 暴露给用户。public property 所用的 field 称为 backing store。

private fields 的名字有一种写法，以 `_` 开始，以便与 methods 内的 local variables 区分。

```cs
private string _text;
```

Fields 可以在声明的同时初始化（initialization），此时不能引用其它 fields。若在 constructor 内再次给它赋值，则覆盖之前的值。

```cs
private int start = 10;
```

Fields 使用 `readonly` modifier 之后只能在 initialization 或 constructor 内赋值。

使用 `static read-only` modifiers 的 fields 跟常量很像，区别是在编译时不知道 fields 的值，只有在运行时才知道。
