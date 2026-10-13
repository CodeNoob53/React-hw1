interface Product {
  id: number;
  name: string;
  price: number;
}

const usernames: string[] = ['alice', 'bob', 'charlie'];
const ratings: number[] = [4.5, 3.8, 5];

const products: Product[] = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 800 },
  { id: 3, name: 'Headphones', price: 150 },
];

console.log(usernames, ratings, products);
