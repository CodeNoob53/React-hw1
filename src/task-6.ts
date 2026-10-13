function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]);
const firstString = getFirstElement<string>(['a', 'b', 'c']);
const firstBoolean = getFirstElement<boolean>([true, false, true]);

console.log(firstNumber, firstString, firstBoolean);

// Control check: TypeScript reports an error for an element of another type.
// getFirstElement<number>([1, 2, '3']); // Error: Type 'string' is not assignable to type 'number'.
