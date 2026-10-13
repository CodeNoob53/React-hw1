interface Product {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
}

const product: Product = {
  id: 1,
  name: 'Laptop',
  price: 1200,
  description: 'Powerful laptop for work and gaming',
};

console.log(product);
