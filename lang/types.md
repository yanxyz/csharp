---
permalink: /lang/types/
---

# C# Types

[Types (C# Programming Guide) | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/types/)

所有的 types 都继承自 System.Object：

![](https://docs.microsoft.com/en-us/dotnet/articles/csharp/programming-guide/types/media/valuetypescts.png)

- strings 是引用类型
- numbers 是 structs，是值类型

[Built-In Types Table](https://docs.microsoft.com/en-us/dotnet/articles/csharp/language-reference/keywords/built-in-types-table)

获取 Type

```cs
var a = 3;
Console.WriteLine(a.GetType());  // System.Int32
Console.WriteLine(typeof(a));    // Error
Console.WriteLine(typeof(int));  // System.Int32
```

## 类型转换

**隐式转换**，不需要专门的语法，因为转换没有数据损失。比如 int 转为 long，SubClass 转为 BaseClass。

**显示转换** (casts)，需要使用 cast 操作符，转换可能有数据损失。比如 long 转为 int，BaseClass 转为 SubClass。

```cs
double x = 123;
int y = (int)x;
```

转换失败将抛出 InvalidCastException 异常。可以使用 is 或 as 操作符转换，避免抛出异常。is 返回 bool；

```cs
Console.WriteLine("abc" is int);
```

as 进行转换，若转换成功则返回转换之后的值，不然返回目标类型的默认值。as 只能用于 reference type 或 nullable type。

```cs

```
