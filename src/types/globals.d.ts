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
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  avatarUrl?: string;
  createdAt: Date;
  address?: UserAddress[];
}

export interface UserAdress {
  id: string;
  street: string;
  city: string;
  country: string;
  isDefault: boolean;
  notes?: string;
}
