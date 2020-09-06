# 每周总结可以写在这里

# 异步编程
async、await回顾

## 红绿灯

一个路口的红绿灯，会按照绿灯亮10秒，黄灯亮2秒，红灯亮5秒的顺序无限循环。用JS代码来控制这个红绿灯

+ 古早时期，只有setTimeout，按照时间差的做法

```
//不嵌套的setTimeout
function go() {
    green();
    setTimeout(yellow, 10000);
    setTimeout(red, 12000);
    setTimeout(go, 17000);
 }


//嵌套的setTimeout，使用递归
function go2() {
    green();
    setTimeout(function(){
        yellow();
        setTimeout(function(){
            red();
            setTimeout(function(){
                go();
            }, 5000);
        }, 2000);
    }, 10000);
}
```

+ promise用链式表达代替callback hell这种深度递归，但本质上没有改进
```
function sleep(t) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, t);
    })
}

function go() {
    green();
    sleep(1000).then(() => {
        yellow();
        return sleep(200);
    }).then(() => {
        red();
        return sleep(500);
    }).then(go);
}
```

+ async、await，把promise当普通函数调
```
function sleep(t) { 
    return new Promise((resolve, reject) => {
        setTimeout(resolve, t);
    });
}

async function go() {
    while(true) {
        green();
        await sleep(10000);
        yellow();
        await sleep(2000);
        red();
        await sleep(5000);
    }
}
```

+ 自动控制换点击按钮控制
```
function happen(element, eventName) {
    return new Promise((resolve, reject) => {
        element.addEventListener(eventName, resolve, {once:true});
    });
}

async function go() {
    while(true) {
        green();
        await happen(document.getElementById('next'), 'click');
        yellow();
        await happen(document.getElementById('next'), 'click');
        red();
        await happen(document.getElementById('next'), 'click');
    }
}
```


# 寻路问题
分几步思路来
+ 第一步，画一个100*100的宫格  
怎么创建一个一万的数组并给它填上0？  
老式写法：  
var map = new Array(10001).join(0).split('').map(s => Number(s));  
新式写法：  
var map = new Array(10000).fill(0)  
嵌套铺满10000个格子  
for(y) {  
​	for(x) {}  
}
+ 第二步，实现画图功能    
鼠标点击后开始画，改变格子颜色，对每个格子添加事件mouseover，mousedown之后开始画，有可能从画盘之外退出，所以监听mouseover，以mousedown的状态判断是否可以画。
+ 第三步，添加橡皮擦功能  
mousedown =>e.which === 3  => clear = true
+ 第四步，添加存储画图功能  
这里用到localStorage  
动态规划，可以在dom树的diff算法里

## 画路径思路：
+ 1、广度优先搜索
+ 2、深度优先搜索

#### 格子有三种状态：
+ 1、白色，不知道是否可以走
+ 2、紫色，可以走，但是不知道是否可以继续扩展
+ 3、蓝色，可以走，而且还可以从它往外扩展

