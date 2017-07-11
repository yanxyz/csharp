# C# throw

`throw` 抛出 exception

```cs
throw new Exception("exception message");
```

在 catch 中重新抛出 exception 时不指定 exception，不然是新建一个 exception，也就丢掉了原来的 exception 的 stack trace（@System.Exception.Stacktrace）。

C# 7 新增 throw expression

```cs
value ?? throw new ArgumentNullException("Name cannot be null", nameof(value));
```
