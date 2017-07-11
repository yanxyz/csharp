# C# Numeric Types

[Reference Tables for Types (C# Reference)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/reference-tables-for-types)


## Numeric literals

binary literals

```cs
var b = 0b0001;
```

literals 可以使用 digit separator，它可以出现在任意位置，十进制通常使用千分位

```cs
var sixteen = 0b0001_0000;
int i = 100_000_000_000;
double d = 3.141_592_653
```

##


```cs
Console.WriteLine(1 / 1000);
Console.WriteLine((float)1 / 1000);
```


## 转换

字符串转换为数字，以 int 为例

- int.parse 若转换失败则抛出异常 FormatException
- int.TryParse 若转换失败则返回 false
- System.Convert.ToInt32(String) 在内部使用 Parse

在转换时先去掉字符串头尾的空白，中间的空白将导致转换失败。

```cs
Console.WriteLine(int.Parse("-105"));
Console.WriteLine(float.Parse("10e1"));
```

TryParse 第二个参数使用 out 修饰符

```cs
var result = int.TryParse("10e1", out int i); // 同时声明 i
Console.WriteLine($"{result} {i}");
```

## bytes

byte array 转为 int

```cs
byte[] bytes = byte[] bytes = { 0, 0, 0, 25 };
// 如果系统架构是 little-endian，先颠倒
if (BitConverter.IsLittleEndian)
    Array.Reverse(bytes);
int i = BitConverter.ToInt32(bytes, 0);
Console.WriteLine(i);
```

int 转为 byte array

```cs
byte[] bytes = BitConverter.GetBytes(123);
Console.WriteLine("byte array: " + BitConverter.ToString(bytes));
```
