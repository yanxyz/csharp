# C# Classes

```cs
public class Point
{
    public int x, y;

    public Point(int x, int y)
    {
        this.x = x;
        this.y = y;
    }
}
```

## Members

[Members (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/members)

classes 有这些 Members：

- Fields
- Constants
- [Properties](properties.md)
- [Methods](methods.md)
- [Events](events.md)
- [Indexers](indexers.md)
- [Constructors](constructors.md)
- Finalizers
- Operators
- Nested Types

除了 Constructors 和 Destructors，derived classes 继承其它 Members。private members 也被继承，只是 derived classes 不能访问。
