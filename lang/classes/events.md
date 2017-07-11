# C# Events

Events 建立在 delegates，因此要先了解 [delegates](../delegates.md)。

[Handling and Raising Events](https://docs.microsoft.com/en-us/dotnet/standard/events/index)


```cs
using System;

class Program
{
    static void Main(string[] args)
    {
        Counter c = new Counter(new Random().Next(10));
        // 添加 event handler
        c.ThresholdReached += c_ThresholdReached;

        Console.WriteLine("press 'a' key to increase total");
        while (Console.ReadKey(true).KeyChar == 'a')
        {
            Console.WriteLine("adding one");
            c.Add(1);
        }
    }

    // event handler method
    static void c_ThresholdReached(object sender, ThresholdReachedEventArgs e)
    {
        Console.WriteLine("The threshold of {0} was reached at {1}.", e.Threshold, e.TimeReached);
        Environment.Exit(0);
    }
}

class Counter
{
    private int threshold;
    private int total;

    public Counter(int passedThreshold) => threshold = passedThreshold;

    public void Add(int x)
    {
        total += x;
        if (total >= threshold)
        {
            ThresholdReachedEventArgs args = new ThresholdReachedEventArgs()
            {
                Threshold = threshold,
                TimeReached = DateTime.Now
            };
            OnThresholdReached(args);
        }
    }

    // 定义一个方法，用于触发事件
    protected virtual void OnThresholdReached(ThresholdReachedEventArgs e)
    {
        // 调用 delegate(event)
        ThresholdReached?.Invoke(this, e);
    }

    // 声明 event
    public event EventHandler<ThresholdReachedEventArgs> ThresholdReached;
}

// 自定义 event data class
public class ThresholdReachedEventArgs : EventArgs
{
    public int Threshold { get; set; }
    public DateTime TimeReached { get; set; }
}
```

#### event 声明

用 `event` 关键字声明 event。上例声明了一个 event filed。它的 type 是 `EventHandler<ThresholdReachedEventArgs>`。.NET Framework 为 event 提供了两个 delegates，基本不需要使用自定义 delegate

```cs
public delegate void EventHandler(Object sender, EventArgs e);
public delegate void EventHandler<TEventArgs> (Object sender, EventArgs e);
```

event 的名字，过去分词表示 event 已经发生；现在分词表示 event 将发生。

public field 是不建议使用的，而 public event 是可以接受的，它的操作只有 add/remove handler。

触发 event 的 method，名字按惯例为 OnEventName。通常使用 `protected virtual` 修饰符，用

自定义 event data class 继承 EventArgs，名字按惯例以 EventArgs 为后缀。

event handler，在 WPF 中名字按惯例为 `ControlName_EventName`。

## Event Properties

上面的例子声明 event field。如果 class 触发很多 events，占用内存会很大。


## Async subscribers


##

发送 event 的 class 称为 publisher；接收 event 的 class 称为 subscriber。
