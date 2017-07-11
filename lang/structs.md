# C# Structs

[Structs (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/structs)

struct 语法跟 class 接近。

```cs
struct Point
{
    // fields 不能在声明时初始化，只可以在构造器或在 struct 创建之后初始化
    public int x, y;

    public Point(int x, int y)
    {
        this.x = x;
        this.y = y;
    }
}

var a = new Point(10, 10);
```

struct 是值类型，不能继承，不过可以实现接口。

## constructor

struct 可以有多个 constructors。不能定义 default constructor（没有参数的 constructor），因为 compiler 会自动生成一个，这个 default constructor 在以 new 实例化 struct 时调用。它不是一定要使用，因为 struct 可以直接赋值使用。

```cs
int i = new int();
Console.WriteLine(i);

int j;
Console.WriteLine(j); // Error，没有初始化

int k = 1;
Console.WriteLine(k);
```

提示：所有内置的 numeric types 都是 structs。

有参数的 constructor 只能通过 new 调用。
