# C# Local Functions

[Local functions](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-7#local-functions)

有些 methods 只在一个地方调用，而这不能在 class 定义中一眼看出来，只有在读完代码了解了代码逻辑之后才能确定。另外也无法阻止其它地方调用它们。可以用 local functions 代替它们。

[Local functions vs. lambda expressions](https://docs.microsoft.com/en-us/dotnet/csharp/local-functions-vs-lambdas)

local functions 背后是 private methods, 名字由 compiler 提供。它跟其它 methods 没有差别，除了限定在外部 methods 内。知道了这点，就不难理解 local functions 可以在定义之前调用。lambda expressions 必须在定义之后调用。

lambda expressions 的闭包使用 class，即 compiler 创建一个 anonymous class，然后实例化以保存闭包包裹的变量。local functions 的闭包使用 class 或 struct。
