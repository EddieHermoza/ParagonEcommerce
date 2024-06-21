
export type Product= {
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
  }

  export type Category = {
    name: string;
    slug: string;
    img:string
    description: string;
  }

  export type Brand = {
    name: string;
    slug: string;
    description: string;
  }