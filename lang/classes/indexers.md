---
permalink: /lang/indexers/
---

# C# Indexers

[Indexers (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/indexers/index)

indexer 让 class/struct 像 array 一样使用 。

indexer 的形式像 property：

```cs
// 指定名字
[System.Runtime.CompilerServices.IndexerName("Days")]
// [type index], index 可以是 int, string 等
public int this[string day]
{
    get
    {
        return (GetDay(day));
    }
}
```
