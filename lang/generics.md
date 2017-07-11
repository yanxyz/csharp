# C# Generics

[Generics (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/index)



```cs
// Declare the generic class.
public class GenericList<T>
{
    void Add(T input) { }
}

class TestGenericList
{
    private class ExampleClass { }

    static void Main()
    {
        // Declare a list of type int.
        var list1 = new GenericList<int>();

        // Declare a list of type string.
        var list2 = new GenericList<string>();

        // Declare a list of type ExampleClass.
        var list3 = new GenericList<ExampleClass>();
    }
}
```

System.Collections.Generic 提供了常用的 generic collections, 比如 list, queue, stack, hashset, dictionary 等。

定义泛型时用 T parameter, 使用泛型时指定 T argument.
<https://docs.microsoft.com/en-us/dotnet/articles/csharp/programming-guide/generics/generic-type-parameters>

### Generic Methods

```cs
static void Swap<T>(ref T lhs, ref T rhs)
{
    T temp;
    temp = lhs;
    lhs = rhs;
    rhs = temp;
}
```

```cs
public static void TestSwap()
{
    int a = 1;
    int b = 2;

    Swap<int>(ref a, ref b);
    // 可以省略 type argument，让 compiler 推断
    // Swap(ref a, ref b);
    System.Console.WriteLine(a + " " + b);
}
```

compiler 根据参数的 type 推断，若 method 没有参数就不能推断了。



## Constraints

https://docs.microsoft.com/en-us/dotnet/articles/csharp/programming-guide/generics/constraints-on-type-parameters
