# C# Nested Types

定义在 class 内的 type 称为 nested type。

```
public class Container
 {
     public class Nested
     {
         private Container parent;

         public Nested()
         {
         }
         public Nested(Container parent)
         {
             this.parent = parent;
         }
     }
 }
```
