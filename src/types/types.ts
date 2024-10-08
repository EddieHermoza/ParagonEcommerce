
/* export type Product= {
    name: string;
    precio: number;
    rating: number; //TODO este no
    categoria: string;
    marca: Brand;
    slug: string;
    especificaciones: string[];
    imgs: string[];
    stock:number //TODO este no
    descripcion:string
  } */

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

  export type Customer= {
    id: number;
    name: string;
    lastName: string;
    email:string;
    status: number;
  }

  export type Provider= {
    id: number;
    ruc:number;
    name: string;
    number:number;
    email:string;
    web:string;
    status: number;
  }

  export type Category = {
    id:number,
    name: string,
    slug: string,
    img:string,
    description: string,
    status: number,
  }

  export type Brand = {
    id:number;
    banner:string;
    banner_mobile:string;
    name: string;
    slug: string;
    description: string;
    status: number;
  }