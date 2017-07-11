# C# Expressions

- [Expressions](https://docs.microsoft.com/en-us/dotnet/articles/csharp/tour-of-csharp/expressions)
- [Operators (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/operators)

Expressions 由 operands 和 operators 组成。

有一个 operand 的 operators 称为一元操作符 unary operators，比如 `++`；有两个 operands 的 operators 称为二元操作符 binary operators，比如 `+`；有三个 operands 的 operators 称为三元操作符 ternary operators，C# 只有一个，即 conditional operator `?:`。

当 expression 有多个 operators 时，operators 的优先级决定计算顺序，比如 `x + y * z` 即 `x + (y * z)`。

当 operators 的优先级一样时，operators 的 结合性决定计算顺序。二元操作符除 `=` 是右结合之外，其它都是左结合：

```cs
x + y + z; // (x + y) + z
x = y = z; // x = (y = z)
```

`()` 可以调整 operators 的优先级和结合性。

class/struct 可以 override operators 和自定义 operators，见 [这里](classes/operators.md)。

## Operators

`x?.y` Conditional member access，x 是 null 时不访问 member。

`a?[x]` Conditional array and indexer access，a 是 null 时不访问元素。

`x ?? y` Null coalescing，x 是 null 时结果为 y。

`|` 操作数是 bool 时表示 ntegral types and bool

```cs
Console.WriteLine(true | false);  // logical or
Console.WriteLine(true || false); // conditional or
Console.WriteLine(true ?? false); // null coalescing
```
