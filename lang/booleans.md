---
permalink: /lang/booleans/
---

# C# Booleans

两个值：true 和 false。

C# 不会将其它类型隐式转为 bool 类型。

```cs
int x = 123;

if (x)  // Error: "Cannot implicitly convert type 'int' to 'bool'"
{
    Console.Write("The value of x is not zero.");
}
```
