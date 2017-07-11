---
permalink: /lang/constructors/
---

# C# Constructors

constructor 的名字与 class 一样，没有返回值。

可以有多个参数不同的 constructors。其中没有参数的 constructor 是 default constructor。

non-static class 如果没有定义任何 constructors, compiler 会生成一个 public default constructor。

```cs
class A {}
class B
{
    public B(int i) {}
}

static void Main()
{
    var a = new A();    // compiler 自动生成 A() constructor
    var b = new B();    // Error, 因为不存在 B() constructor
    var b1 = new B(1);  // 使用 B(int i) constructor
}
```

constructor 可以通过 `this` 调用另一个 constructor。此 constructor 的参数可以传给 `this` 使用。

```cs
public Employee(int weeklySalary, int numberOfWeeks)
    : this(weeklySalary * numberOfWeeks)  // this 指向 Employee(long n)
```

constructor 如果只有一个语句，可以使用 [expression body definitions](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/expression-bodied-members)

## Private Constructors

Private Constructors 阻止实例化。

```cs
class NLog
{
    // Private Constructor:
    private NLog() { }

    public static double e = Math.E;  //2.71828...
}
```
