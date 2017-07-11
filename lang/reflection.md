# C# Reflection

[Reflection (C#)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/reflection)

获取变量类型

```cs
int i = 42;
System.Type type = i.GetType();
System.Console.WriteLine(type);
```

获取 assembly meta

```cs
System.Reflection.Assembly info = typeof(System.Int32).Assembly;
System.Console.WriteLine(info);
```

