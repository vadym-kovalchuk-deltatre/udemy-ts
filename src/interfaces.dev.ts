// Or replace interface to type, it'll be the same //
// type PersonInterface = {} //
interface PersonInterface {
  firstName: string;
  readonly email: string;
  phones: string[];
  address?: string;

  addPhoneNumber(number: string): void;
  getPhoneNumbers(): string[];
  getInfo(): string;
}

interface EmailGetter extends PersonInterface {
  getEmail(): string;
  getAddress?(): string;
}

class Person implements EmailGetter {
  readonly phones: string[] = [];
  constructor(
    public firstName: string,
    readonly email: string,
    public address: string = "Default address"
  ) {}

  addPhoneNumber(phone: string): void {
    this.phones.push(phone);
  }

  getPhoneNumbers() {
    return this.phones;
  }

  getInfo(): string {
    return `
    Person name is: ${this.firstName},
    email: ${this.email},
    phones: ${this.phones},
    address: ${this.address}`;
  }

  getEmail(): string {
    return this.email;
  }

  getAddress(): string {
    return this.address;
  }
}

// ~~~~~~~~~~~ Create one Person ~~~~~~~~~~ //
let person1 = new Person("Teez0ne", "teez0ne@");
console.log(person1.getInfo());
person1.addPhoneNumber("(270) 307-7745");
person1.addPhoneNumber("(419) 471-3518");
console.log(person1.getInfo());
console.log("User email method: " + person1.getEmail());

// ~~~~ Create Person 2 from Interface ~~~ //
let person2: PersonInterface = {
  firstName: "Margaret Clarke",
  email: "hannu@lu.sd",
  phones: ["(641) 663-7883"],
  addPhoneNumber(number: string): void {
    this.phones.push(number);
  },
  getPhoneNumbers(): string[] {
    return this.phones;
  },
  getInfo() {
    return "" + this.firstName + " email: " + this.email;
  },
};

console.log(person2.getPhoneNumbers());
person2.addPhoneNumber("(372) 950-2423");
console.log(person2.getInfo());

// ~~~~~~~~~~~~~~~ Person 3 ~~~~~~~~~~~~~~ //
let person3: PersonInterface;
person3 = new Person("Mark Gardner", "cac@ikvarcir.ba");
console.log(person3.getInfo());
