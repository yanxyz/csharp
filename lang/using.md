---
permalink: /lang/using/
---

# C# using

## using Directive

using 指令引入 types 后可以不使用 fully qualified name

```cs
using System;

class Program
{
    static void Main()
    {
        // 省略 namespace System.Console
        Console.WriteLine("Hello World!");
    }
}
```

using static 只引入 types 的 static members

```cs
using static System.Console;
using static System.Math;
using static System.DayOfWeek;

class Program
{
    static void Main()
    {
        WriteLine(Sqrt(3 * 3 + 4 * 4));
        WriteLine(Friday - Monday);
    }
}
```

### Alias


```cs
using System;
using Groups = System.Collections;  // 指定别名，右边必须是 fully-qualified type

public class Program
{
    public class System {}

    public static void Main(string[] args)
    {
        var d = new Groups::Hashtable()  // 引用别名 Alias::
        {
            ["1"] = "one",
            ["2"] = "two",
            ["3"] = "three"
        };

        foreach (var key in d.Keys)
        {
            Console.WriteLine($"{key} {d[key]}");
        }
    }
}
```

别名不能直接用 List<T>，要指定具体的 T：

```cs
using list = System.List<int>;
```

## using Statement

对于 File, Font 等 unmanaged resources，using 语句会确保调用 IDisposable object 的 Dispose method，比如当出现 exception 时。

using 语句内，IDisposable object 是 read-only

```cs
using (Font font1 = new Font("Arial", 10.0f))
{
    byte charset = font1.GdiCharSet;
}
```
