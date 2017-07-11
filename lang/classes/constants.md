---
permalink: /lang/constants/
---

# C# Constants

[Constants (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/fields)

常量是不可变值，在编译的时候就已经知道它的值。

常量用 `const` modifier 声明，在声明时必须初始化，只能使用 [built-In types](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/built-in-types-table)，不能使用自定义 classes, structs, arrays 等。

compiler 将常量转为 intermediate language (IL) code，不存在  variable address，因此不能按引用传递常量。

可以一次声明多个常量。在初始化常量时，可以引用其它的常量，只要不是循环引用。

```cs
public const int months = 12, weeks = 52, days = 365;
const double daysPerWeek = (double) days / (double) weeks;
```

常量相当于 static fields，不能再使用 `static` modifier。
