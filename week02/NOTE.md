# 每周总结可以写在这里

###乔姆斯基谱系
    "a"
    "b"
    <Program>:= "a" + | "b"+
    <Program>:= <Program> "a" + | <Program> "b"+
    <Program>:= ("a" + | "b"+)+
    ababbbbbaaa

###巴科斯范式

    <Number> = "0" | "1" | "2" | ...... | "9"
    <DecimalNumber> = "0" | (("1|" | "2" | ...... | "9") <Number>* )
    <Expression> = <DecimalNumber> "+" <DecimalNumber>
    <Expression> = <DecimalNumber> | <Expression> "+" <DecimalNumber>
    0
    1 093023412
    01

###生产式（BNF）

    <Number> ::= "0" | "1" | "2" | ...... | "9"
    <DecimalNumber> ::= "0" | (("1|" | "2" | ...... | "9") <Number>* )
    <DecimalNumber> ::= /0|[1-9][0-9]*/
    <PreimaryExpression> ::= <DecimalNumber> | "(" <LogicalExpression> ")"
    <MultiplicativeExpression> = <PreimaryExpression> |
        <MultiplicativeExpression> "*" <PreimaryExpression> |
        <MultiplicativeExpression> "/" <PreimaryExpression>
    <AdditiveExpression> ::= <MultiplicativeExpression> |
        <AdditiveExpression> "+" <MultiplicativeExpression> |
        <AdditiveExpression> "-" <MultiplicativeExpression>
    <LogicalExpression> ::= <AdditiveExpression> |
        <LogicalExpression> "||" <AdditiveExpression> |
        <LogicalExpression> "&&" <AdditiveExpression>

###无限制文法

    <a> <b> ::= "c"

###上下文相关文法

    "a" <b> "c" ::= "a" "x" "c"
    "```四则运算\n" <LogicalExpression> "```" = "```四则运算"
    
    
    ```


###上下文无关文法

    <A> ::= ?

###正则文法

    <A> ::= <A>?
    <A> ::=?<A>

    {
        get a {return 1},
        get : 1
    }
    2**1**2
##一般命令式编程语言

 - Atom
 
 Identifier
 Literal
 
 - Expression
 
 Atom
 Operator
 Puncuator
 - Statement
 
 Expression
 Keyword
 Puncuator
 - Structure
 
 Function
 Class
 Process
 Namespace
 ......
 - Program
 
 Program
 Module
 Package
 Library
 
 ##重学JavaScript
 

