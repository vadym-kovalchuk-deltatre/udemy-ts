let person: {
  name: string;
  age: number;
  tags: string[];
  details: {
    title: string;
    desc: string;
  };
  tuple: [number, string];
} = {
  name: "TeeZ0Ne",
  age: 41,
  tags: ["blue", "red", "gray"],
  details: {
    title: "",
    desc: "Some desc",
  },
  tuple: [1, "admin"],
};

for (const tag of person.tags) {
  console.log(tag.toUpperCase());
}

enum Role {
  ADMIN = "admin",
  USER = "user",
  CUSTOMER = 1,
}

function counterWCb(a: number, b: number, cb: (num: number) => number) {
  let result = a + b;
  return cb(result);
}

console.log(
  counterWCb(1, 2, (result) => {
    return result * 3;
  })
);
