export type Product= {
    id: number;
    name: string;
    price: number;
    rating: number;
    category: string;
    brand: string;
    slug: string;
    especs: string[];
    imgs: string[];
    stock: number;
    description: string;
    status: number;
  }

  export type CartProduct={
    id:number,
    name:string,
    price:number,
    discount:number,
    maxQuantity:number,
    quantity:number,

  }