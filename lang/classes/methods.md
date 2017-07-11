---
permalink: /lang/methods/
---

# C# Methods

```cs
public static void Hello()
{
    Console.WriteLine("Hello World");
}
```

## 参数

参数细分为两种

- parameters，形参，方法声明指定的参数
- arguments, 实参，方法调用指定的参数

形参列表，(required parameters, optional parameters, rest parameter)
实参列表，named arguments 放在 positional arguments 后面。

```cs
static int CalculateArea(int width, int height = 3)
{
    return width * height;
}

// positional arguments
CalculateArea(4);
CalculateArea(4, 3);

// named arguments
CalculateArea(height: 3, width: 4);
```

- [Named and Optional Arguments (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/named-and-optional-arguments)

### params keyword

剩余参数

```cs
public static void UseParams(params int[] list)
{
    foreach (var x in list)
    {
        Console.WriteLine(x);
    }
}
```

### 参数传递

参数默认按值传递，使用关键字 ref 或 out 按引用传递参数。

- 形参和实参都要使用 ref/out
- 方法签名不能只是 ref 与 out 的区别
- ref 与 out 不能用于 Async methods，Iterator methods

ref variable 必须先初始化，out variable 可以不初始化，不过在访问 variable 时必须赋值

```cs
int.tryParse("100", out int n)
```

## 返回值

如果方法没有返回值，则声明返回值类型为 void。


## overload

方法重载，方法的名字一样签名不一样。方法签名包括修饰符，方法名字和参数，不包括返回值的类型。

method signature 方法签名，包含方法名，参数（数量及类型），返回值类型，不过方法重载时不包括返回值类型。

方法可以重载，即在同一作用域同名而签名不同的方法视为不同的方法。签名包含方法名，参数数量及其类型，但不包含返回值类型。

##

类的修饰符都可用到方法中。如果有个方法有修饰符 abstract，则它所在的类也必须添加 abstract。


