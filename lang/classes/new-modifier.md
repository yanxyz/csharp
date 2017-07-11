# C# new Modifier

[new Modifier (C# Reference)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/new-modifier)

子类成员与基类成员同名时，子类成员遮蔽（hide）基类成员。如果这个子类成员不使用 new modifier，compiler 将给出 warning。

- constant, field, property 同名，但是基类中是 method 则不算
- 子类 method 遮蔽基类同名的 field, property 以及所有基类中签名一致的 method
- 子类 indexer 遮蔽所有基类中签名一致的 indexer

new 和 override 互斥。

new 用于非遮蔽成员，compiler 将给出 warning。
