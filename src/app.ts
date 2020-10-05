console.info("new file");
let a = 10;
let b = 12;

function add(a: number, b: number, cb: (res: number) => number): number {
  const res = a + b;
  return cb(res);
}
const sum = add(a, b, (res) => {
  return res + 1 / 10;
});

const result01: (a: number) => void = (result) => console.log(result);

result01(sum);

const summ = (cb: (sum: number) => void, ...params: number[]) => {
  let sum = 0;
  for (const param of params) {
    sum += param;
  }
  cb(sum);
};

const showResultParams = (message: string, sum: number) =>
  console.log(`${message} ${sum}`);

summ(showResultParams.bind(this, "Some add message"), 1, 2, 2);
