## 匹配所有 Number 直接量
```js
    //带符号的整数、浮点数、科学计数法
    let str1 = /[+-]?(\d+([.]\d*)|\d*([.]\d+))([eE][+-]?\d+)?/g;
    //二进制
    let str2 = /^0[bB][01]+/g;
    //八进制
    let str3 = /^0[Oo]?[0-7]+/;
    //16进制
    let str4 = /^0[xX][0-9a-fA-F]+/;
    let str5 = /[+-]?(\d+([.]\d*)|\d*([.]\d+))([eE][+-]?\d+)?|^0[bB][01]+|^0[Oo]?[0-7]+|^0[xX][0-9a-fA-F]+/;
```
## 匹配所有的字符串直接量
```js
    const str5 = "~!@#$%^&*()_+-=QWERTYUIOP{}qwertyuiop[]1234567890asdfghjkl;\'ASDFGHJKL:\"ZXCVBNM<>?zxcvbnm,./\\\|~！@#￥%……&*（）——+-=【】、|；‘’：“”，。、《》？";
    const reg = /[\u0020-\u007E\u0000\u0009-\u000D][\u0020-\u007E\u0000\u0009-\u000D]*[\u0020-\u007E\u0000\u0009-\u000D]/g;
    console.log(str5.replace(reg, ''));
```
## UTF8 Encoding函数
```js
    const encodingUtf8 = (str) => {
        return str.split('').map((s) => {
            const binary = s.codePointAt(0).toString(2);
            if (binary.length < 8) {
                return binary.padStart(8, '0');
            }
            const result = [];
            const contrast = ['0', '110', '1110', '11110'];
            for (let i = binary.length; i > 0; i -= 6) {
                const str = binary.slice(Math.max(i - 6, 0), i);
                if (str.length === 6) {
                    result.unshift(`10${str}`);
                } else {
                    const add = contrast[result.length];
                    result.unshift(`${add}${str.padStart(8 - add.length, '0')}`);
                }
            }
            return result.join('、');
        });
    };
    console.log(encodingUtf8('加油加油！！！'));
```