# 每周总结可以写在这里

## 结构化程序设计和执行过程
#### Objective-c
     事件循环：node或浏览器里的内容，不是javascript语言的一部分
     在oc中，可以引用一下类型：函数、代码片段、module模块 在oc的jsContext中，有两种方式引用js:
```js
import <Foundation/Foundation.h>
import <JavaScriptCore/JavaScriptCore.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // var context = new JSContext
        JSContext* context = [[JSContext alloc] init];
        JSValue* result;
        while (true) {
            char sourcecode[1024];
            scanf("%s", sourcecode);
            NSString* code = [NSString stringWithUTF8String:sourcecode];
            // context.evaluateScript('')
            result = [context evaluateScript:code];
            // console.log(result.toString());
            NSLog(@"%@", [result toString]);
        }
    }
    return 0;
}
```

```js
import <Foundation/Foundation.h>
import <JavaScriptCore/JavaScriptCore.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // var context = new JSContext
        JSContext* context = [[JSContext alloc] init];
        JSValue* result;
        NSString* code = @"(function(x) { return x * x; })";
        // context.evaluateScript('')
        result = [context evaluateScript:code];
        [result callWithArguments:@[]];
        JSValue* arg1 = [JSValue valueWithInt32:12 inContext:context];
        // console.log(result.toString());
        NSLog(@"%@", [[result callWithArguments:@[arg1]] toString]);
    }
    return 0;
}
```
```js
import <Foundation/Foundation.h>
import <JavaScriptCore/JavaScriptCore.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // var context = new JSContext
        JSContext* context = [[JSContext alloc] init];
        JSValue* result;
        NSString* code = @"new Promise(resolve => resolve()).then(() => this.a = 3), function() {return this.a}";
        // context.evaluateScript('')
        result = [context evaluateScript:code];
        // [result callWithArguments:@[]];
        // console.log(result.toString());
        NSLog(@"%@", [[result callWithArguments:@[]] toString]);
    }
    return 0;
}
```

## 宏任务、微任务
- 其实所有的JS代码都是一个微任务，只是哪些微任务构成了一个宏任务；执行在JS引擎里的就是微任务，执行在JS引擎之外的就是宏任务，循环宏任务的工作就是事件循环。并不是说有then才会存在微任务，有then可能产生一个宏任务中有多个微任务的情况，但是一切js中的代码都是在微任务中执行的。
    - setTimeout、setInterval 这种其实不是 JS 语法本身的 API，是 JS 的宿主浏览器提供的 API, 所以是宏任务。浏览器的事件也是宏任务，比如click，keyup之类的UI交互。  
    一个Script标签内的就算是一个宏任务，而Promise是JS本身自带的API，这种就是微任务。宿主提供的方法是宏任务，JS自带的是微任务。
- 宏任务中的同步代码以及宏任务的优先级、微任务的执行顺序 
一个宏任务里的同步代码也可以理解为微任务，只不过比宏任务里异步代码微任务先入队。微任务是没有优先级的，宏任务是有优先级的。一个宏任务里至少先入队一个微任务，就是这个宏任务里的同步代码，同步代码会归为一个微任务只有.then才能产生新的微任务，一个宏任务里面的同步的代码最先执行，微任务根据入队时间进行执行。
- 宏任务中的异步代码  
await、then之前都是同步代码
await后面的代码，就相当于多了一个then，await产生的then在分号后面。
只有 new Promise(resolve => resolve()).then(() => { ... ... })能产生方式微任务队列的方法，generator产生的是同步代码。也就是说，在没有Promise的时代，就没有微任务一说。
一个promise 里面的then10秒后执行 还一个promise 的then 3秒后执行 他们是同一级别的promise 他们有可能不再一个宏任务的微任务队列里面，重点在于10秒怎么执行。
微任务里写个10万次循环，后面的宏任务都点等待   
- 逗号运算符是依次执行所有语句
- 如果遇到throw Error的话，后面的宏任务微任务还执行吗?
还执行，只打断一个微任务，不会把后面的都干掉，还可以catch呢
```js
new Promise(resolve => resolve())
    .then(() => {
        console.log("1");
    });
    
setTimeout(function() {
    console.log("2");
}, 0);
console.log("3");

// 3，1，2
```
```js
new Promise (resolve => resolve()).then(() => this.a = 3);

setTimeout(function() {
    console.log;
}, 0)
// 3
```
```js
new Promise (resolve => resolve()).then(() => console.log("1"));
setTimeout(function() {
    console.log("2");
    new Promise(resolve => resolve()).then(() => console.log("3"));
}, 0)
console.log("4");
// 4，1，2，3
```
```js
new Promise (resolve => (console.log("0"), resolve())).then(() => console.log("1"));

setTimeout(function() {
    console.log("2")
    new Promise(resolve => resolve()).then(() => console.log("3"));
}, 0)
console.log("4")
console.log("5")
// 0，4，5，1，2，3
```
- 有两个宏任务，setTimeout和其他代码
    - 宏任务  
    同步代码有0，4，5；  
    1是第一个微任务的异步代码 ，
    - 宏任务  
    2是第二个宏任务里的第一个微任务 异步，  
    3是第二个宏任务里的第二个位任务 异步

```js
async function afoo() {
    console.log("-1");
}
new Promise (resolve => (console.log("0"), resolve())).then(() => console.log("1"));
setTimeout(function() {
    console.log("2");
    new Promise(resolve => resolve()).then(() => console.log("3"));
}, 0)
console.log("4")
console.log("5")
afoo()
// 0，4，5，-1, 1，2，3
```
- 如果async中没有await,async函数就相当于同步代码，在await之前都是同步代码
    - 宏任务  
    0，4，5，-1  
    1
    - 宏任务  
    2  
    3

```js
async function afoo() {
    console.log("-2");
    await new Promise(resolve => resolve());
    console.log("-1");
}
new Promise (resolve => (console.log("0"),resolve()))
    .then(() => console.log("1"));
setTimeout(function() {
    console.log("2");
    new Promise(resolve => resolve()).then(() => console.log("3"));
}, 0)
console.log("4")
console.log("5")
afoo()
// 0，4，5，-2，1，-1，2，3
```
- -1变成了第三个微任务
    - 宏任务   
    0，4，5，-2， 
    1
    -1
    - 宏任务
    2
    3
```js
async function afoo() {
    console.log("-2")
    await new Promise(resolve => resolve());
    console.log("-1")
}
new Promise(resolve => (console.log("0"), resolve()))
    .then(()=>(
        console.log("1"), 
        new Promise(resolve => resolve())
            .then(() => console.log("1.5"))
    ));
setTimeout(function() {
    console.log("2");
    new Promise(resolve => resolve()) .then(console.log("3"))
}, 0)
console.log("4");
console.log("5");
afoo()
// 在macOS Chorme 执行结果: 0, 4, 5, -2, 1, -1, 1.5, 2, 3
// 在macOS Safari 执行结果: 0, 4, 5, -2, 1, 1.5, -1, 2, 3
```
```js
new Promise(res => res())
    .then(() => setTimeout(
        () => console.log(1), 10000
    ), console.log(0));
console.log(2);
// 0, 2, 1  相当于在then里加了两个参数
```
```js
function sleep(duration) {
    return new Promise(function (resolve, reject) {
        console.log("b");
        setTimeout(function () {
            resolve();
            const begin = Date.now();
            while (Date.now() - begin < 1000);
            console.log("d");
        }, duration);
    })
}
console.log("a");
sleep(0).then(() => console.log("c")); 
// ab dc
```
- 第一个宏任务里有a,b
- 第二个宏任务里有 dc c是resolve传进来的
```js
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
async1();
new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});
// async1 start
// async2
// promise1
// async1 end
// promise2
```

- 先执行async1, 里面同步的代码有：async1 start  
- 再执行async2，里面没有await，都是同步的代码， 输出：async2  
- 再执行Promise resolve之前都是同步的代码：输出：promise1  
- 同步代码都是第一个微任务  
- 第二个微任务：await async2()之后的代码：输出：async1 end  
- 第三个微任务：promise resolve：输出：promise2  