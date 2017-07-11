---
permalink: /lang/polymorphism/
---

# C# 多态

[Polymorphism (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/polymorphism)

面向对象编程有三个支柱：封装，继承和多态。

多态有两个显著特点：

- 在运行时，子类的对象可以按基类的对象对待。
- 当基类定义了虚方法 virtual methods，子类可以重写 override 它们。在运行时，调用基类的方法，将运行子类的重写方法（virtual invocation）。

`List<Shape> shapes` 为第一点，子类隐式转换为基类。

`s.Draw();` 为第二点，CLR 发现基类这个方法为虚方法，则在继承链中查找 overide method，最终运行的是子类中的 override method。

virtual 关键字可以用于这些类成员 methods, properties, events，indexers，不能用于 fields。

若不使用 override 而是使用 new，子类只遮盖虚成员，不重写虚成员。

在继承链中，比如 C:B:A，不管 B 是否重写了虚成员，C 都可以重写。如果 B 使用了 sealed override 关键字重写，C 的子类 D 不能再重写了，只能用 new 遮盖。

子类可以用 base 关键字访问基类的虚成员。推荐在虚方法内调用基类的虚方法，不然要自己实现基类的虚方法的功能。

C# 所有 types 都是多态的，因为都继承自 System.Object，ToString 便是一个虚方法。

```cs

```
