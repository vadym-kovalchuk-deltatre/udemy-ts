console.info("new file");
let a = 10;
let b = 12;

function add(a: number, b: number, cb: (res: number) => number): number {
  const res = a + b;
  return cb(res);
}
let sum = add(a, b, (res) => {
  return res + 1 / 10;
});

const result01: (a: number) => void = (result) => console.log(result);

result01(sum);
