# C# LINQ

```cs
var smallNumbers = numbers.Where(n => n < 10);
```

`Where` method 参数为一个 delegate。

```cs
public static IEnumerable<TSource> Where<in TSource> (IEnumerable<TSource> source, Func<TSource, bool> predicate);
```
