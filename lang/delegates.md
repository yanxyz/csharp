---
permalink: /lang/delegates/
---

# C# Delegates

Delegate 是特殊的 type，引用 methods，借助它可以让 methods 当作参数，变量值等。

```cs
// delegate 关键字声明 delegate
// delegate 声明可以放在 namespace, class, struct 等当中
delegate void Del(string str);

// 声明 delegate 所用的 method
// delegate method 签名包含参数列表和返回值
static void Notify(string name)
{
    Console.WriteLine("Notification received for: {0}", name);
}

// 创建 delegate 实例
Del del1 = new Del(Notify);

// C# 2.0 简化语法
Del del2 = Notify;

// C# 2.0 引入 anonymous methods，不需要为 delegate 声明 named methods
Del del3 = delegate(string name) { Console.WriteLine("Notification received for: {0}", name); };

// C# 3.0 引入 lambda expressions 替代 anonymous methods
Del del4 = name => { Console.WriteLine("Notification received for: {0}", name); };
```

lambda expressions 和 anonymous methods 统称为 anonymous functions。
