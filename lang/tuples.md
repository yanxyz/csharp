# C# Tuples

`Tuple<T>`

## ValueTuple

C# 7 新增。VS2017 RC 添加引用 System.ValueTuple。之前的版本添加 NuGet package "System.ValueTuple"

unnamed tuples 的 fields 以 Item1, Item2, Item3... 的形式访问

```cs
var letters = ("a", "b");
letters.Item2
```

named tuples，为 fields 指定名字

```cs
var letters = (Alpha: "a", Beta: "b");
letters.Beta
```



tuples 不支持继承


generic Tuple classes 的问题
fields 名字没有意义 Item1, Item2
是引用类型，对性能有影响
如果用 classes 和 structs， 意味着  data and behavior

ValueTuple generic structs
是 struct，不可以添加 behavior (methods)
Each member field is a public field.
All the ValueTuple types are mutable structs

unnamed tuples.

named
compiler 将命名转为 Item*
Microsoft Intermediate Language (MSIL)  并不包含名字


TupleElementNames attribute on the method.

