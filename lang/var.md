# C# var keyword

用 var 声明变量，不指定变量 type，由 compiler 去推断。

- [Implicitly Typed Local Variables (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/implicitly-typed-local-variables)
- [Implicitly Typed Arrays](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/implicitly-typed-arrays)


对于 anonymous types，只能使用使用 var。

```cs
// select 从句创建 anonymous type
var custQuery = from cust in customers
                where cust.City == "Phoenix"
                select new { cust.Name, cust.Phone };

// item 是 anonymous type
foreach (var item in custQuery)
{
    Console.WriteLine("Name={0}, Phone={1}", item.Name, item.Phone);
}
```

[Type Relationships in LINQ Query Operations](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/type-relationships-in-linq-query-operations)


