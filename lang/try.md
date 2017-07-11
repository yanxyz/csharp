---
permalink: /lang/try/
---

# C# try...catch...finally

`try` 捕获 exception。

`try` 至少要有一个  `catch` 或 `finally`。

`catch` 指定要捕获的 exception 的 type，即 exception filter。如果 `catch` 指定的 type 是抛出的 exception 的 type 或者是它的 base type，则这个 `catch` 是匹配的，将运行它。

`try` 可以有多个 `catch`，但是只运行第一个匹配的 `catch`。因此更具体的  `catch` 要写在前面，不然它没有运行的机会。

`finally` 始终运行，不管 `try` 是否有 exception，不管是否找到了匹配的 `catch`。

```cs
static void TestCatch()
{
    System.IO.StreamWriter sw = null;
    try
    {
        sw = new System.IO.StreamWriter(@"C:\test\test.txt");
        sw.WriteLine("Hello");
    }
    catch (System.IO.FileNotFoundException ex)
    {
        // Put the more specific exception first.
        Console.WriteLine(ex.ToString());
    }
    catch (System.IO.IOException ex)
    {
        // Put the less specific exception last.
        Console.WriteLine(ex.ToString());
    }
    finally
    {
        sw.Close();
    }

    Console.WriteLine("Done");
}
```

Exceptions 继承自 System.Exception。自定义 exception:

```cs
class CustomException : Exception
{
    public CustomException(string message)
    {

    }
}

private static void TestThrow()
{
    var ex = new CustomException("Custom exception in TestThrow()");
    throw ex;
}
```
