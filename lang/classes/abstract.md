---
permalink: /lang/abstract/
---

# C# abstract modifier

classes, methods, properties, indexers, events 可以声明为 abstract。

abstract class 不能实例化。abstract class 可以包含 abstract methods/properties，它们没有具体的实现。

non-abstract class 继承 abstract class 要实现它的 abstract members。

abstract method 只能出现在 abstract class 内，没有 body。

```cs
public abstract class A
{
    public abstract void M();
}
```

abstract method 隐式是 virtual method。

```cs
public class A
{
    public virtual void M() {}
}

public abstract class B : A
{
    // abstract method has no implementation, it just ends with `;`
    public abstract override void M();
}

public class C : B
{
    public override void M() {}
}
```

virtual method M 声明为 abstract 后仍然为 virtual。

