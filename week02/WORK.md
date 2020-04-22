##匹配所有 Number 直接量
```
    /*
    * 开头的符号和e、E后面的符号可能有可能没有
    * 有e或者E后面必定跟着一个数字
    * js小数点前后必须跟着一个值，比如12.表示12，.12表示0.12
    * */
    //带符号的整数、浮点数、科学计数法
    let reg = /[+-]?(\d+([.]\d*)|\d*([.]\d+))([eE][+-]?\d+)?/g
    //二进制
    let reg1 = /^0[bB][01]+/g
    //八进制
    let reg2 = /^0[Oo]?[0-7]+/
    //16进制
    let reg3 = /^0[xX][0-9a-fA-F]+/
    let res = /[+-]?(\d+([.]\d*)|\d*([.]\d+))([eE][+-]?\d+)?|^0[bB][01]+|^0[Oo]?[0-7]+|^0[xX][0-9a-fA-F]+/
```
##匹配所有的字符串直接量
```
    const str = '1‘112\"2233“35”55\"66\'6\'7“77';
    const reg = /[\u201C\u201D\u2018\u2019\u0020\u0022][^\u201C\u201D\u2018\u2019\u0020\u0022]*[\u201C\u201D\u2018\u2019\u0020\u0022]/g;
    console.log(str.replace(reg, ','));
```


##UTF8 Encoding函数
```
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