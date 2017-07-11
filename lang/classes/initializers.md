# C# Initializers

## Object initializers

```cs
class Cat
{
    // Auto-implemented properties.
    public int Age { get; set; }
    public string Name { get; set; }
}

Cat cat = new Cat {
    Age = 10,
    Name = "Fluffy"
};
```

## Collection initializers

Array：

```cs
var colors = new[] { "red", "green", "green"};
```

`List<T>`:

```cs
var colors = new List<string> { "red", "green", "green"};
var cats = new List<Cat>
{
    new Cat(){ Name = "Furrytail", Age=5 },
    new Cat(){ Name = "Peaches", Age=4 },
    null
};
```

Dictionary:

```cs
var dict = new Dictionary<string, string>
{
    ["1"] = "one",
    ["2"] = "two",
    ["3"] = "three"
};
```


## See Also

<https://marcin-chwedczuk.github.io/object-and-collection-initializers-in-csharp>
