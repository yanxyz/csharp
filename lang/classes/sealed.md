---
permalink: /lang/sealed/
---

# C# sealed modifier

sealed class 不能继承。

```cs
public sealed class A {}
```

sealed 可以阻止 override virtual members，必须和 override 一起用：

```cs
class X
{
    public virtual void F() { Console.WriteLine("X.F"); }
    public virtual void F2() { Console.WriteLine("X.F2"); }
}

class Y : X
{
    public sealed override void F() { Console.WriteLine("Y.F"); }
    public override void F2() { Console.WriteLine("Y.F2"); }
}

class Z : Y
{
    // Attempting to override F causes compiler error CS0239.
    // public override void F() { Console.WriteLine("Z.F"); }
    public new void F() { Console.WriteLine("Z.F"); }

    // Overriding F2 is allowed.
    public override void F2() { Console.WriteLine("Z.F2"); }
}

static void Main()
{
    X xz = new Z();
    xz.F();  // "Y.F"
    xz.F2(); // "Z.F2"
}
```
