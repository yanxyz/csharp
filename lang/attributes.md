# C# Attributes

attributes 为 members 添加附加信息。

所有的 attribute classes 都继承自 System.Attribute。名字按惯例有后缀为 Attribute。

在使用 attributes 时，放在 `[]` 内，可以省略名字后缀 Attribute。

```cs
using System;

public class HelpAttribute: Attribute
{
    public string Url { get; }
    public string Topic { get; set; }

    public HelpAttribute(string url) => this.Url = url
}

[Help("url")]
public class Widget
{
    [Help("url",
    Topic = "Display")]
    public void Display(string text) {}
}
```


