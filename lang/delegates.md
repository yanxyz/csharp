# C# Delegates

- [Delegates & events](https://docs.microsoft.com/en-us/dotnet/csharp/delegates-events)
- [Delegates (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/index)

Delegates 为 .Net 提供 late binding 机制。Late Binding 意思是创建一个算法，在调用时提供一个方法实现算法的一部分。比如排序，通常提供一个 comparision。

## 定义

使用 `delegate` 关键字定义一个 delegate type


看着像是声明一个变量，实际声明一个 type。compiler 生成一个 class（继承自 System.Delegate），并为它生成 add 和 remove handlers，由此用户可以从它的实例的 invocation list 中添加和删除方法。方法的签名要与声明一致。

delegate 声明可以放在 class, namespace 中。

## 实例

delegate members, delegate variables, delegate arguments

```cs
// Declare an instance of that type:
public Comparison<T> comparator;
```

不能在 namespace 中实例化。

使用 `delegate` 关键字声明的 delegate type，继承自 System.MulticastDelegate，而它又继承自 System.Delegate。System.MulticastDelegate 和 System.Delegate 自身不是 delegate types，这意味着，不能从它们的子类定义 delegate type。

Delegate 是特殊的 type，引用 methods，借助它可以让 methods 当作参数，变量值等。


```cs
using System;

// 声明一个 delegate type
delegate void Del(string str);

class Program
{
    static void Notify(string name)
    {
        Console.WriteLine("Notification received for: {0}", name);
    }

    static void Main(string[] args)
    {
        // C# 1.0
        Del del1 = new Del(Notify);
        del1("1.0");

        // C# 2.0 简化语法
        Del del2 = Notify;
        del2("2.0");

        // C# 2.0 引入 anonymous methods，不需要为 delegate 声明 named methods
        Del del3 = delegate (string name)
        {
            Console.WriteLine("Notification received for: {0}", name);
        };
        del3("anonymous methods");

        // C# 3.0 引入 lambda expressions 替代 anonymous methods
        Del del4 = name =>
        {
            Console.WriteLine("Notification received for: {0}", name);
        };
        del4("lambda expressions");

        Console.ReadKey();
    }
}
```

lambda expressions 和 anonymous methods 统称为 anonymous functions。

## Anonymous Methods

[Anonymous Methods (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/anonymous-methods)

C# 3.0 引入 lambda expressions 替代 anonymous methods。不过有一点 anonymous methods 有一点

Anonymous methods 可以省略参数列表。

## Multicast Delegates

Multicast delegates 包含一个 invocation list，methods 添加这个列表中。在调用 delegate 时，依序调用列表中的 methods。如果某个 method 抛出异常，则停止调用后面的 methods。调用 delegate 的返回值，是最后一个 method 的返回值。

Multicast delegates 可以用 `+`, `-` 合并。



## Generic Delegates

[Variance in Delegates (C#)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/covariance-contravariance/variance-in-delegates)

Action type
