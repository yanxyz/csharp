---
permalink: /lang/arrays/
---

# C# Arrays

single-dimensional array，一维数组

```cs
var a1 = new int[10];  // a.Rank = 1
```

multi-dimensional arrays

```cs
var a = new int[10, 5];  // 二维数组 a.Rank = 2
```

jagged array，元素为数组, 每个元素数组的长度可以不一样

```cs
var a = new int[2][];
a[0] = new int[10];
a[1] = new int[5];
```

## Array initializer

在声明时初始化

```cs
int[] a1 = new int[] { 1, 3, 5, 7, 9 };
// 简化
int[] a2 = { 1, 3, 5, 7, 9 };
```

如果在声明时没有初始化，初始化时要用 new

```cs
int[] b;
b = new int[] { 1, 3, 5, 7, 9 };
```

Implicitly Typed Arrays:

```cs
var a = new[] { 1, 3, 5, 7 };    // int[]
var b = new[] { "foo", "bar" };  // string[]
```

## 常见操作

数组只能修改元素的值，不能增删元素。
