# 每周总结可以写在这里
# 重学 API
- 子元素逆序
```js
function reverseChildren(element) {
    const l = element.length;
    while(--l > 0) {
        element.appendChild(element[l]);
    }
}
```
- Range
    - extractContents
    - setStartBefore
    - setEndBefore
    - setStartAfter
    - setEndAfter
    - selectNode
    - selectNodeContents
    ```js
        var range = new Range()
        range.setStart(element, 3)
        range.setEnd(element, 6)
        
        var range = document.getSelection().getRangeAt(0)
        var fragment = range.extractContents()
        range.insertNode(document.createTextNode("aaa"))
    ```
# CSSOM
- document.styleSheets
    - document.styleSheets
- Rules
    - document.styleSheets[0].cssRules
    - document.styleSheets[0].insertRule("p { color: pink }", 0)
    - document.styleSheets[0].removeRule(0)
- Rule
    - CSSStyleRule
        - selector   Text String
        - style      K-V结构
    - CSSCharsetRule
    - CSSImportRule
    - CSSMediaRule
    - CSSFontFaceRule
    - CSSPageRule
    - CSSNamespaceRule
    - CSSKeyframesRule
    - CSSKeyframeRule
    - CSSSupportsRule
- getComputedStyle
    - window.getComputedStyle(elt, pseudoElt)
        - elt 想要获取的元素
        - pseudoElt 可选伪元素
## CSSOM view API
- scorll
    - window.scrollX
    - window.scrollY
    - window.scroll(0, 0)
    - window.scrollBy(0, 50)
    - element.scrollBy(30, 30)
    - element.scrollTo(0, 100)
    - element.scrollTop
    - element.scrollLeft
    - element.scrollHeight
- 元素属性
    - element.getClientRects()
    - element.getBoundingClientRect()
- 其他
    - window.innerHeight
    - window.innerWidth
    - window.devicePoxelRatio
    - document.documentElement.getBoundingClientRect()


    
    