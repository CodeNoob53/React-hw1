# 01-ts-basics

Домашнє завдання №1 з дисципліни **«React та клієнтська SPA-архітектура»**.

**Тема:** основи TypeScript — типізація даних, функцій та асинхронних операцій.

![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?logo=axios&logoColor=white)
![Prettier](https://img.shields.io/badge/code_style-Prettier-F7B93E?logo=prettier&logoColor=black)

## Зміст

- [Технології](#технології)
- [Структура проєкту](#структура-проєкту)
- [Запуск](#запуск)
- [Завдання та реалізація](#завдання-та-реалізація)
  - [1. Типізація простих значень](#завдання-1-типізація-простих-значень)
  - [2. Інтерфейси](#завдання-2-інтерфейси)
  - [3. Типізація масивів](#завдання-3-типізація-масивів)
  - [4. Типізація функцій](#завдання-4-типізація-функцій)
  - [5. Union Type](#завдання-5-union-type)
  - [6. Узагальнені типи](#завдання-6-узагальнені-типи)
  - [7. Типізація Promise](#завдання-7-типізація-promise)
  - [8. HTTP-запити](#завдання-8-http-запити)
- [Перевірка якості](#перевірка-якості)

## Технології

| Інструмент                                    | Призначення              |
| --------------------------------------------- | ------------------------ |
| [TypeScript](https://www.typescriptlang.org/) | Статична типізація       |
| [Vite](https://vite.dev/)                     | Збирання та dev-сервер   |
| [Axios](https://axios-http.com/)              | HTTP-запити (завдання 8) |
| [Prettier](https://prettier.io/)              | Форматування коду        |

## Структура проєкту

```text
01-ts-basics/
├── index.html
├── package.json
├── tsconfig.json
└── src/
    ├── main.ts      # підключає всі завдання
    ├── task-1.ts    # прості типи
    ├── task-2.ts    # інтерфейси
    ├── task-3.ts    # масиви
    ├── task-4.ts    # функції
    ├── task-5.ts    # union type
    ├── task-6.ts    # generics
    ├── task-7.ts    # Promise<T>
    └── task-8.ts    # Axios
```

Кожен файл містить код лише відповідного завдання.

## Запуск

```bash
npm install
npm run dev
```

Відкрийте адресу, яку покаже Vite, і перегляньте результати в консолі браузера (DevTools → Console).

| Команда             | Дія                                 |
| ------------------- | ----------------------------------- |
| `npm run dev`       | Запуск dev-сервера                  |
| `npm run build`     | Перевірка типів і production-збірка |
| `npm run typecheck` | Лише перевірка TypeScript           |
| `npm run format`    | Форматування коду Prettier          |

## Завдання та реалізація

### Завдання 1. Типізація простих значень

📄 [`src/task-1.ts`](src/task-1.ts)

**Завдання.** Додати явну типізацію до трьох змінних — рядка, числа та логічного значення — не змінюючи їхніх назв і значень.

**Реалізація.**

```ts
const userName: string = 'Alice';
const userAge: number = 25;
const isAdmin: boolean = false;
```

Кожна змінна має явну анотацію типу, що відповідає її значенню.

---

### Завдання 2. Інтерфейси

📄 [`src/task-2.ts`](src/task-2.ts)

**Завдання.** Створити інтерфейс `Product`, що описує об'єкт `product`. Поле `id` має бути доступним лише для читання, `description` — необов'язковим.

**Реалізація.**

```ts
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
  description: '...',
};
```

- `readonly id` — спроба `product.id = 2` спричиняє помилку компіляції.
- `description?` — інші об'єкти типу `Product` можуть не мати опису.

---

### Завдання 3. Типізація масивів

📄 [`src/task-3.ts`](src/task-3.ts)

**Завдання.** Типізувати масиви рядків і чисел через синтаксис `тип[]`, створити інтерфейс для елемента масиву `products` і типізувати масив об'єктів.

**Реалізація.**

```ts
interface Product {
  id: number;
  name: string;
  price: number;
}

const usernames: string[] = ['alice', 'bob', 'charlie'];
const ratings: number[] = [4.5, 3.8, 5];
const products: Product[] = [{ id: 1, name: 'Laptop', price: 1200 } /* ... */];
```

TypeScript не дозволить додати до масиву елемент іншого типу чи об'єкт з іншою структурою.

---

### Завдання 4. Типізація функцій

📄 [`src/task-4.ts`](src/task-4.ts)

**Завдання.** Типізувати параметри `name`, `age`, `email` функції `printUserInfo`, зробити `email` опціональним і вказати тип повернення.

**Реалізація.**

```ts
function printUserInfo(name: string, age: number, email?: string): void {
  console.log(`Name: ${name}, Age: ${age}`);
  if (email) {
    console.log(`Email: ${email}`);
  }
}

printUserInfo('Alice', 30);
printUserInfo('Bob', 25, 'bob@example.com');
```

Функція лише виводить дані в консоль, тому повертає `void`. Її можна викликати з двома або трьома аргументами.

---

### Завдання 5. Union Type

📄 [`src/task-5.ts`](src/task-5.ts)

**Завдання.** Обмежити параметр `status` функції `logStatus` трьома допустимими значеннями: `"loading"`, `"success"`, `"error"`.

**Реалізація.**

```ts
type Status = 'loading' | 'success' | 'error';

function logStatus(status: Status): void {
  /* ... */
}
```

**Перевірка.** Виклик з довільним рядком не компілюється:

```ts
logStatus('pending');
// ❌ Argument of type '"pending"' is not assignable to parameter of type 'Status'.
```

---

### Завдання 6. Узагальнені типи

📄 [`src/task-6.ts`](src/task-6.ts)

**Завдання.** Зробити функцію `getFirstElement` узагальненою з параметром типу `T`, що приймає `T[]` і повертає `T`. Явно вказати параметри типів у викликах.

**Реалізація.**

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]); // number
const firstString = getFirstElement<string>(['a', 'b', 'c']); // string
const firstBoolean = getFirstElement<boolean>([true, false, true]); // boolean
```

**Контрольна перевірка.** Передача елемента іншого типу спричиняє помилку (у коді виклик закоментовано):

```ts
getFirstElement<number>([1, 2, '3']);
// ❌ Type 'string' is not assignable to type 'number'.
```

Тип результату завжди збігається з типом елементів масиву, `any` не використовується.

---

### Завдання 7. Типізація Promise

📄 [`src/task-7.ts`](src/task-7.ts)

**Завдання.** Типізувати функцію `getMessage` та створений у ній проміс так, щоб результат мав тип `string`.

**Реалізація.**

```ts
function getMessage(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Hello from TypeScript!');
    }, 1000);
  });
}

getMessage().then((result) => {
  console.log(result.toUpperCase()); // result: string
});
```

- `Promise<string>` описує тип майбутнього результату.
- `resolve` приймає лише рядок.
- Параметр `result` у `.then()` автоматично має тип `string`, тож редактор підказує рядкові методи.

---

### Завдання 8. HTTP-запити

📄 [`src/task-8.ts`](src/task-8.ts)

**Завдання.** Створити інтерфейс `Post` і типізувати GET-запит Axios так, щоб `response.data` мав тип `Post[]`.

**Реалізація.**

```ts
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts',
  );
  return response.data; // Post[]
}

fetchPosts().then((posts) => {
  console.log(posts[0].title); // title: string
});
```

- Generic `axios.get<Post[]>` задає тип `response.data`.
- ✅ **Додаткове завдання:** тип повернення `fetchPosts` явно вказано як `Promise<Post[]>`.

## Перевірка якості

- [x] Проєкт створено за допомогою Vite
- [x] У `src` є файли `task-1.ts` – `task-8.ts`, кожен з кодом свого завдання
- [x] `npm run typecheck` проходить без помилок
- [x] Тестові рядки з помилками закоментовано
- [x] `any` не використовується
- [x] Axios додано до залежностей
- [x] Код відформатовано Prettier
