type Abc = (a: number, b: number) => number;

let abc: Abc = (a: number, b: number) => a + b;

console.log(abc(2, 3));

// The same via interface //
interface AbcInt {
  a: number;
  b: number;

  sum(a: number, b: number): number;
}

let abcInt: AbcInt = {
  a: 1,
  b: 2,
  sum(a: number, b: number): number {
    return a + b;
  },
};
console.log(abcInt.sum(abcInt.a, abcInt.b));
