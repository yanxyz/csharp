# C# Inheritance

[Inheritance (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/inheritance)

class B 继承 class A，B 称为 derived class，A 称为 base class。

```cs
class A {}
class B : A {}
```

B 继承 A 除 constructors, finalizers 之外的成员。

只能直接继承一个 class。一个接一个的继承，形成一条继承链，比如 C:B:A，C 会继承 B 和 A 的成员。

## Constructors

derived class constructors 通过 `base` 调用 base class constructors。
constructors 的参数可以传给 `base`。
如果没有 base, 默认以 `base()` 调用 base class default constructor。

```cs
class A {}

class B : A {
    public B(int i) {}  // 即 public B(int i) : base() {}
}

class C : B
{
    public C(int i) {}  // 即 public C(int i) : base() {}
}

static void Main() {
    var b1 = new B();     // Error
    var b2 = new B(100);  // Ok
    var c1 = new C();     // Error
    var c2 = new C(100);  // Error
}
```

- b1，因为 B 没有 B() 构造器
- b2，base() 调用 A 的 A() 构造器，A 没有构造器，compiler 自动生成一个
- c1, 因为 C 没有 C() 构造器
- c2, 因为 base() 调用 B 的 B() 构造器，而它不存在

