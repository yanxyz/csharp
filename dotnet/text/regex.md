---
permalink: /regex/
---

# Regex

[.NET Framework Regular Expressions](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions)

namespace

```cs
using System.Text.RegularExpressions;
```

```cs
var match = Regex.Match(input, pattern);



while (match.Success) {
    // Match.Groups[0]
    Console.WriteLine(match.Value, match.Index);
    match = match.NextMatch();
}
```

```cs
foreach (var match in Regex.Matches(input, pattern, RegexOptions.IgnoreCase)) {
    Console.WriteLine(match.Value, match.Groups[1].Value, match.Index);
}
```

