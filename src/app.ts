console.info("new file");
let a = 10;
let b = 12;

function add(a: number, b: number, cb: (res: number) => number) {
  const res = a + b;
  return cb(res);
}
let sum = add(a, b, (res) => {
  return res + 1 / 10;
});
