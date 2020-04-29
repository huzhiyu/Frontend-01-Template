## convertStringToNumber
```js
    const convertStringToNumber = (str, notation=10) => {
        let num = 0;
        let i = 0;
        while(i < str.length) {
            let c = str.charAt(i);
            if(c === '.') {
                break
            }
            let code = str.charCodeAt(i) - 48;
            num = num * notation + code;
            i += 1;
        }
        i += 1;

        let multiple = 1;
        while(i < str.length) {
            let code = str.charCodeAt(i) - 48;
            multiple *= notation;
            num += code / multiple;
            i += 1;
        }
        return num
    };
    console.log(convertStringToNumber("2020极客时间", 10));
```
## convertNumberToString
```js
    const convertNumberToString = (num, significant = 2) => {
        let str = "";
        if (num < 0) {
            str += '-';
        }
        let integer = Math.floor(num);
        let fraction = num % 1;
        let multiple = 10;
        let intNum = Math.abs(integer / multiple);
        while(intNum >= 10) {
            multiple *= 10;
            intNum = intNum / multiple;
        }
        let absNum = Math.abs(integer);
        let tmpNum = 0;
        while(multiple >= 1) {
            tmpNum = Math.floor(absNum / multiple);
            str += String.fromCharCode(tmpNum + 48);
            absNum = absNum - tmpNum * multiple;
            multiple /= 10;
        }
        let fum = 0;
        if (fraction > Number.EPSILON) {
            str += '.';
            let cnt = 0;
            while (cnt < significant) {
                fum = fraction * 10;
                let n = Math.floor(fum);
                str += String.fromCharCode(n + 48);
                cnt += 1;
                fraction = fum % 1;
            }
        }
        return str;
    };
    console.log(convertNumberToString(123.0459, 2));
```
## JavaScript 标准中，哪些对象是我们无法实现的

- Bound Function Exotic Objects  
    - Internal Slots
        - [[BoundTargetFunction]]  
        可以调用的对象 -- The wrapped function object.
        - [[BoundThis]]  
        任何类型 -- The value that is always passed as the this value when calling the wrapped function.
        - [[BoundArguments]]  
        任何 List 类型（Argument）-- A list of values whose elements are used as the first arguments to any call to the wrapped function.

    - internal methods
        - [[Call]] ( thisArgument, argumentsList )
        - [[Construct]] ( argumentsList, newTarget )
        - BoundFunctionCreate ( targetFunction, boundThis, boundArgs )

- Array Exotic Objects  
internal methods
    - [[DefineOwnProperty]] ( P, Desc )
    - ArrayCreate ( length [ , proto ] )
    - ArraySpeciesCreate ( originalArray, length )
    - ArraySetLength ( A, Desc )

- String Exotic Objects  
internal methods
    - [[GetOwnProperty]] ( P )
    - [[DefineOwnProperty]] ( P, Desc )
    - [[OwnPropertyKeys]] ( )
    - StringCreate ( value, prototype )
    - StringGetOwnProperty ( S, P )

- Arguments Exotic Objects  
internal methods
    - [[GetOwnProperty]] ( P )
    - [[DefineOwnProperty]] ( P, Desc )
    - [[Get]] ( P, Receiver )
    - [[Set]] ( P, V, Receiver )
    - [[Delete]] ( P )
    - CreateUnmappedArgumentsObject ( argumentsList )
    - CreateMappedArgumentsObject ( func, formals, argumentsList, env )
    - MakeArgGetter ( name, env )
    - MakeArgSetter ( name, env )

- Integer-Indexed Exotic Objects  
internal methods
    - [[GetOwnProperty]] ( P )
    - [[HasProperty]] ( P )
    - [[DefineOwnProperty]] ( P, Desc )
    - [[Get]] ( P, Receiver )
    - [[Set]] ( P, V, Receiver )
    - [[OwnPropertyKeys]] ( )
    - IntegerIndexedObjectCreate ( prototype, internalSlotsList )
    - IntegerIndexedElementGet ( O, index )
    - IntegerIndexedElementSet ( O, index, value )

- Module Namespace Exotic Objects  
internal methods
    - [[SetPrototypeOf]] ( V )
    - [[IsExtensible]] ( )
    - [[PreventExtensions]] ( )
    - [[GetOwnProperty]] ( P )
    - [[DefineOwnProperty]] ( P, Desc )
    - [[HasProperty]] ( P )
    - [[Get]] ( P, Receiver )
    - [[Set]] ( P, V, Receiver )
    - [[Delete]] ( P )
    -  [[OwnPropertyKeys]] ( )
    - ModuleNamespaceCreate ( module, exports )
-  Immutable Prototype Exotic Objects  
inernal methods
    - [[SetPrototypeOf]] ( V )
    - SetImmutablePrototype ( O, V )

- Proxy Object
    - [[GetPrototypeOf]] getPrototypeOf
    - [[SetPrototypeOf]] setPrototypeOf
    - [[IsExtensible]] isExtensible
    - [[PreventExtensions]] preventExtensions
    - [[GetOwnProperty]] getOwnPropertyDescriptor
    - [[DefineOwnProperty]] defineProperty
    - [[HasProperty]] has
    - [[Get]] get
    - [[Set]] set
    - [[Delete]] deleteProperty
    - [[OwnPropertyKeys]] ownKeys
    - [[Call]] apply
    - [[Construct]] construct
