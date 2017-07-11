---
permalink: /lang/enums/
---

# C# Enums

Enum 定义一组具名离散值

```cs
enum Color { Red, Green, Blue }
```

underlying type 默认为 int。下例 使用 sbyte:

```cs
enum Alignment: sbyte
{
    Left = -1,
    Center = 0,
    Right = 1
}
```

与 underlying type 相互转换：

```cs
var i = (int)Color.Blue; // int i = 2;
var c = (Color)2;
```
