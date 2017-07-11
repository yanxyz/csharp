---
permalink: /lang/strings/
---

# C# Strings

Strings 使用双引号，使用单引号的是 Char(System.Char struct)。

Strings 由 chars 组成。str.Length 返回 strings 包含的 chars 的个数。

### Literal strings

```cs
string message = @"
hello
world"

string message = @"".\a b\"""
```

### Interpolated Strings

`{}` 插入表达式，{% raw %}`{{}}`{% endraw %} 插入字面的 `{}`。

可以使用 format string。字面 `"`, `:`, `,` 需要转义。如果是在表达式内，放在括号内不需要转义。

```cs
var name = "Yan"
var age = 30;
Console.WriteLine($"{name} is {age:D3} year{(age == 1 ? "" : "s")} old.");
```

```cs
var user = "yan";
Console.WriteLine($@"C:\Users\{user}");
```

[Interpolated Strings](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interpolated-strings)

## 常见操作

Strings 是引用类型，可能是 null

```cs
String.IsNullOrEmpty(s);
s == null || s == String.Empty
```

`+` 拼接字符串，不过效率更高是使用 System.Text.StringBuilder

```cs
var sb = new StringBuilder();
sb.Append("abc");
sb.AppendLine("xyz");
var str = sb.toString();
```

## Composite Formatting

[Composite Formatting](https://docs.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting)

