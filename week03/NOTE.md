# 每周总结可以写在这里
##重学前端
 - Atom
    - Grammar
        - Tree vs Priority
            ```yaml
            + -
            * /
            ( )
            ```
    - Expressions - 203页
        - Member
            - a.b
            - a[b]
            - foo\`string\`
            - super.b
            - super['b']
            - new.target
            - new Foo()
        - Call
            - foo()
            - super()
            - foo()['b']
            - foo().b
            - foo()\`abc\`
        - Left Handside & Right Handside
            ```yaml
            Example
            a.b = c;    
            a + b = c;
            ```
        - Update
            - a ++
            - a --
            - ++ a
            - -- a