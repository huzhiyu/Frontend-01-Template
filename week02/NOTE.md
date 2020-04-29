# 每周总结可以写在这里

### 乔姆斯基谱系
```
    "a"
    "b"
    <Program>:= "a" + | "b"+
    <Program>:= <Program> "a" + | <Program> "b"+
    <Program>:= ("a" + | "b"+)+
    ababbbbbaaa
```
### 巴科斯范式
```
    <Number> = "0" | "1" | "2" | ...... | "9"
    <DecimalNumber> = "0" | (("1|" | "2" | ...... | "9") <Number>* )
    <Expression> = <DecimalNumber> "+" <DecimalNumber>
    <Expression> = <DecimalNumber> | <Expression> "+" <DecimalNumber>
    0
    1 093023412
    01
```
### 生产式（BNF）
```
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
```
### 无限制文法
```
    <a> <b> ::= "c"
```
### 上下文相关文法
```
    "a" <b> "c" ::= "a" "x" "c"
    "```四则运算\n" <LogicalExpression> "```" = "```四则运算"
    
    
    ```
```

### 上下文无关文法
```
    <A> ::= ?
```
### 正则文法
```
    <A> ::= <A>?
    <A> ::=?<A>

    {
        get a {return 1},
        get : 1
    }
    2**1**2
```
## 一般命令式编程语言

 - Atom
   - Identifier
   - Literal
 - Expression
   - Atom
   - Operator
   - Punctuator
 - Statement
   - Expression
   - Keyword
   - Punctuator
 - Structure
   - Function
   - Class
   - Process
   - Namespace
 - Program
   - Program
   - Mould
   - Package
   - Library
## Atom Identifier & Literal
 - WhiteSpace
   - \<TAB\>：`\t`
   - \<VT\>： `\v`
   - \<FF\>：`\f` 
   - \<SP\>：`\s`
   - \<NBSP\>：NO-BREAK SPACE
   - \<ZWNBSP\>：ZERO WIDTH NO-BREAK SPACE
   - \<USP\>
 - LineTerminator
   - \<LF\>：`\n`
   - \<CR\>：`\r`
   - \<LS\>
   - \<PS\>
 - Comment
   - // comment
   - /* comment */
 - CommonToken
   - IdentifierName
   - Punctuator
   - NumericLiteral
   - StringLiteral
   - Template
## 基本类型
 - Type
   - Number
   - 浮点数比较: Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON
   - String
     - 支持码点: U+0000 ~ U+10FFFF， 但推荐只使用 U+0000 ~ U+FFFF （BMP）
       - UCS-2 用 2 个字节表示 BMP 的码点
       - UCS-4 用 4 个字节表示码点'\u{10000}'.length // 2
           - 坑 1：length 属性和split 方法。解决：Array.from(strings)
           - 坑 2：码点与字符互转。解决：使用CodePoint的Api
           - 坑 3：正则匹配。解决：/./u
   - 存储方式: UTF8/UTF16
   - Boolean
   - Null
   - Undifined
   - Symbol
 

