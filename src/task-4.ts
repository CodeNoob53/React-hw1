function printUserInfo(name: string, age: number, email?: string): void {
  console.log(`Name: ${name}, Age: ${age}`);
  if (email) {
    console.log(`Email: ${email}`);
  }
}

printUserInfo('Alice', 30);
printUserInfo('Bob', 25, 'bob@example.com');
