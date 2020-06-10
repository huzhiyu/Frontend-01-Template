# 每周总结可以写在这里
# 动画与绘制
##Animation
- @keyframes定义
- animation： 使用
```css
// 关键帧
@keyframes mykf {
    from {
        background: #f00;
    }
    to {
        background: #789 ;
    }
}

div {
    animation: mykf 5s infinite;
}
```
普通电影使用48帧播放，游戏60帧
- Property
    - animation-name 时间曲线
    - animation-duration 时间的时长
    - animation-timing-function 动画的时间曲线
    - animation-delay 动画开始前的延迟
    - animation-iteration-count 动画的播放次数
    - animation-direction 动画的方向
- keyframes
    ```css
    @keyframes mykf {
        0% { top: 0; transition: top ease }
        50% { top: 30px; transition: top ease-in }
        75% { top: 10px; transition: top ease-out }
        100% { top: 0; transition: top linear }
    }
    ```
##transition
- Property
    - transition-property 要变换的属性
    - transition-duration 要变换的时长
    - transition-timing-function 时间曲线
    - transition-delay 延迟
##贝塞尔曲线
##渲染与颜色
- 颜色
    - CMYK 和 RGB
    - HSL 和 HSV
    - Hue 色相
    - Saturation 饱和度
    - Lightness 亮度
    - value 色值
- 形状
    - border
    - border-radius
    - box-shadow

#重学HTML
##HTML的定义: XML 与 SGML
`XML 文件的文档类型定义（Document Type Definition）可以看成一个或者多个 XML 文件的模板，在这里可以定义 XML 文件中的元素、元素的属性、元素的排列方式、元素包含的内容等等。`

`DTD（Document Type Definition）概念缘于 SGML，每一份 SGML 文件，均应有相对应的 DTD。对 XML 文件而言，DTD 并非特别需要，well-formed XML 就不需要有 DTD。DTD 有四个组成如下：`

- 元素（Elements）
    - Element
    - Text 文本
    - Comment
    - DocumentType <!Doctype html>
    - ProcessingInstruction 处理信息(没有用)
    - CDATA
- 属性（Attribute）
- 实体（Entities）
    - \" \&quot;
    - \> \&gt;
    - \< \&lt;
    - \& \&amp;
- 注释（Comments）

##重学DOM
- NODE
    - Element：元素型节点，即标签相对应
        - HTMLElement
        - SVGElement
    - Document：文档根节点
    - CharacterData：字符数据
        - Text：文本节点
        - Comment：注释
        - ProcessingInstruction：处理信息
    - DocumentFragment：文档片段
    - DocumentType：文档类型
- 导航类操作
    - parentNode
    - childNodes
    - firstChild
    - lastChild
    - nextSibling
    - previousSibling
- 修改操作
    - appendChild
    - insertBefore
    - removeChild
    - replaceChild
- 高级操作
    - compareDocumentPosition 是一个用于比较两个节点中关系的函数
    - contains 检查一个节点是否包含另一个节点
    - isEqualsNode 检查两个节点是否完全相同
    - isSameNode 检查两个节点是否是同一个节点，实际在javaScript中可以用“===”
    - cloneNode 复制一个节点，如果传入参数true，则回连同类元素做深拷贝
- Events
- Browser API
    - DOM
    - DOM Tree
    - Events
    - Range
    - Traversal (废弃)
    - CSSOM
    - BOM
    - Web Animation
    - Crypto