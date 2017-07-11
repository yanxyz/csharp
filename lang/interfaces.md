# C# Interfaces

interface 定义一个约定，然后由 class/struct 具体实现。

interface 的成员：

- properties
- methods
- events
- indexers

接口不是类，不能实例化，只可继承，并且必须实现接口的成员。

class/struct 可以直接继承多个 interface。它们的实例可以隐式转换为 interface type。

代码规范：

- interface 名字以大写字母 I 开始
- base class 在前，interface 在后

```cs
public class EditBox: IControl, IDataBound
{
    // IControl.Paint
    public void Paint() { }

    // explicit interface member implementation，可以避免使用 public
    // 不过实例不能使用，转为 interface type 之后可以使用
    void IDataBound.Bind(Binder b) { }
}
```

## Indexers

[Indexers in Interfaces (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/indexers/indexers-in-interfaces)

