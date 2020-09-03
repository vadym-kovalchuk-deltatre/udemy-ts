class Department {
  private employees: string[] = [];

  constructor(public readonly id: number, public name: string) {}

  describe(this: Department) {
    console.log(`${this.id} ${this.name}`);
  }
}

class ITDepartment extends Department {
  constructor(public readonly id: number) {
    super(id, "IT");
  }
}
let accountingDepartment = new Department(1, "accounting");
let copyAccountingDepartment = {
  id: 2,
  name: "Copy Accounting",
  describe: accountingDepartment.describe,
  employees: [],
};
let itDepartment = new ITDepartment(3);
console.log(accountingDepartment);
itDepartment.describe();
