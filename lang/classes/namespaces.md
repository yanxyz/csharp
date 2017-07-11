---
permalink: /lang/namespaces/
---

# C# Namespaces

C# Namespaces 以 `.` 为分隔符，如 `System.Collections.Generic`

```cs
namespace N1       // N1
{
    class C1       // N1.C1
    {
        class C2   // N1.C1.C2
        {
        }
    }

    namespace N2   // N1.N2
    {
        class C2   // N1.N2.C2
        {
        }
    }

    namespace N1.N2
    {
        class C3   // N1.N2.C3
        {
        }
    }
}
```

## using

[using](./using.md)


## global

global namespace 是 root namespace, 以 `global::` 引用它。

```cs
using System;

public class Program
{
    public class System { }

    public static void Main(string[] args)
    {
        // System namespace 被 System class 遮蔽
        // 通过 global::System 访问 System namespace;
        global::System.Console.WriteLine("Hello World!");
    }
}
```

## My

<https://docs.microsoft.com/en-us/dotnet/articles/csharp/programming-guide/namespaces/how-to-use-the-my-namespace>

借用 Visual Basic 的 Microsoft.VisualBasic.MyServices namespace。
