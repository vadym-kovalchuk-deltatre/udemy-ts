const arr1: number[] = [4, 5];
let arr2: number[] = [1, 2, 3];
arr2.push(...arr1);
// arr2.unshift(...arr1);

console.log(arr2);

let person: {
  name: string;
  age: number;
} = {
  name: "John",
  age: 21,
};
// copy object //
let person2 = { ...person };
person2.name = "Frederick Santiago";
console.log(person, person2);

// Reduce sum array //
const addReduce = (...arr: number[]) => {
  return arr.reduce((sum, curValue) => {
    return sum + curValue;
  }, 0);
};
console.log(addReduce(...arr2));
