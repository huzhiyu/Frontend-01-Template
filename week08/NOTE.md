# 每周总结可以写在这里
# CSS 选择器

## 选择器语法
### 简单选择器
- \*(universal selector)
- div svg|a(Type selector)
- .cls(class selector)
- \#id(identify selector)
- [attr=value](attribute selector)
- :hover(psuedo class selector)
- ::before(psuedo element selector)

### 复合选择器
- <简单选择器><简单选择器><简单选择器>
- \*、div 写在最前，伪类、伪元素写在最后
### 复杂选择器
- <复合选择器><复合选择器>
- <复合选择器>">"<复合选择器>
- <复合选择器>"~"<复合选择器>
- <复合选择器>"+"<复合选择器>
- <复合选择器>"||"<复合选择器>
### 选择器优先级
```js
div#a.b .c[id=x] [0, 1, 3, 1]
#a:not(#b) [0, 2, 0, 0] :not不参与计算
*.a  [0, 0, 1, 0] *不参与计算
div.a  [0, 0, 1, 1]
```
### 伪类选择器
- 链接/行为
    - :any-link
    - :link
    - :visited
    - :hover
    - :active
    - :focus
    - :target
- 树结构
    - :empty
    - :nth-child
    - :nth-last-child()
    - :first-child
    - :last-child
    - :only-child
- 逻辑型
    - :not
    - :where
    - :has
### 伪元素
- ::before
- ::after
- ::first-line
- ::first-letter

## CSS 排版
### 盒模型
- box-sizing
    - content-box
    - border-box
### 正常流
- 收集盒进入行
- 计算盒在行中的排布
- 计算行的排布
### BFC（块级格式上下文）
- 什么情况会产生 BFC
  - 能容纳正常流的元素都会产生 BFC，除 overflow：visible 外；
- Block-level boxes：flex、table、grid、block
  - 表示块级别的盒子
- block containers: block、inline-block
  - 表示正常流块级元素的容器
- block boxes：block
  - block-level && block-container
  - block box 如果 overflow 是 visible， 那么就跟父 bfc 合并
### margin 折叠
- 同一个 BFC 下 display:inline-block；的元素之间不会发生边距折叠
- 同一个 BFC 下脱离文档流的元素相互间不会发生边距折叠
- 不同 BFC 下的元素之间不会发生边距折叠
