declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

export interface ProductType {
  id: number;
  name: string;
  desc: string;
  price: number;
  img: string;
}
