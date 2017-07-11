# C# Anonymous Types

匿名类型，形式为 object initializers，没有名字。

```cs
var v = new { Amount = 108, Message = "Hello" };
Console.WriteLine(v.Amount + v.Message);
```

匿名类型通常用于 LINQ Query Expressions 的 select 从句。

```cs
var productQuery =
            from prod in products
            select new { prod.Color, prod.Price };

foreach (var v in productQuery)
{
    Console.WriteLine("Color={0}, Price={1}", v.Color, v.Price);
}
```

匿名类型直接继承自 `System.Object`。

匿名类型的只能声明 properties。两个匿名类型若它们的  properties 一样，则它们相等。
