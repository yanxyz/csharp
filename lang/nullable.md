---
permalink: /lang/nullable/
---

# C# Nullable Types

```cs
int? x = null;

int j = x.GetValueOrDefault();
# 若 x 是 null，则返回 int default value

int k;
if (x.HasValue) k = x.Value;
# 若 x 是 null，访问 Value 将抛出 InvalidOperationException

int y = x ?? -1;
# 若 x 是 null，则将 -1 赋值给 y

x + y
# 若 x 是 null，结果是 null。
```
