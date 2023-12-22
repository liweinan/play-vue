// 在TypeScript中，type 可以用来创建新的类型别名，而 interface 则用于定义对象的结构。
export interface Pizza {
    title: string;
    description: string;
    image: string;
    quantity?: number;
    price: string;
    id: string;
}