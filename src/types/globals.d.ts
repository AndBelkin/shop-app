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

export interface UserType {
  id: string;
  username: string;
  photo: string;
  email: string;
  password: string;
  registerDate: Date;
  adress: string;
  birthdayDate: Date;
  numberOfOrders: number;
}
