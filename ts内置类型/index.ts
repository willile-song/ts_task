// 将所有属性标记为readonly，用于设置不希望修改的属性
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}

// 标记对象的key value类型
type Record<K extends keyof any, T> = {
    [p in K]: T
}
// 使用场景
const accountMap: Record<number, AccountInfo> = {
    101: {
        name: 'xx',
        tel: '111111'
    }
}
const user: Record<'name' | 'email', string> = {
    name: '',
    tel: ''
}


// Exclude的反操作，取T，U两者的交集属性
type Extract<T, U> = T extends U ? T : never;

// 实例
type A = Exclude<'a' | 'b' | 'c' | 'd', 'b' | 'c' | 'e'>

// 排除类型 T 的 null | undefined 属性
type NonNullable<T> = T extends null | undefined ? never : T;
// demo
type A = string | number | undefined
type B = NonNullable<A> // string | number
function f2<T extends string | undefined>(x: T, y: NonNullable<T>) {
    let s1: string = x; // Error, x 可能为 undefined
    let s2: string = y; // Ok
}
// Exclude<T, U>，Omit<T, K>
// 移除T的U属性
type Exclude<T, U> = T extends U ? never : T;
// 使用场景
type A = Exclude<'a'|'b'|'c'|'d' ,'b'|'c'|'e' > 
