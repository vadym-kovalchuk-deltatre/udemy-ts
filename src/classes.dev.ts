abstract class Department {
  protected employees: string[] = [];

  constructor(public readonly id: number, public departmentName: string) {}

  describe(this: Department) {
    console.log(`dep id: ${this.id} dep name: ${this.departmentName}`);
  }

  addEmployee(name: string) {
    this.employees.push(name);
  }

  abstract printEmployees(): void | never;
}

class AccountDepartment extends Department {
  constructor(public readonly id: number, public nameDepartment: string) {
    super(id, nameDepartment);
  }
  printEmployees() {
    console.log("Account department employess: ", this.employees);
  }
}
class ITDepartment extends Department {
  private serverNames: string[] = [];
  static defaultName = "IT dep";
  private static instance: ITDepartment;

  private constructor(public readonly id: number) {
    super(id, "IT");
  }

  get availableServerNames() {
    return this.serverNames;
  }

  set availableServerName(serverName: string) {
    this.serverNames.push(serverName);
  }

  printEmployees(): void | never {
    if (this.employees.length > 4) throw new Error("There're lot of employees");
    console.log(`${this.departmentName} employees: ${this.employees}`);
  }

  static getInstance() {
    if (!ITDepartment.instance) {
      this.instance = new ITDepartment(3);
    }
    return this.instance;
  }
}
//  Simple accounting department  //
let accountingDepartment = new AccountDepartment(1, "accounting");
accountingDepartment.printEmployees();
accountingDepartment.addEmployee("TeeZ0NE");
accountingDepartment.printEmployees();

let copyAccountingDepartment = {
  id: 2,
  name: "Copy Accounting",
  describe: accountingDepartment.describe,
  employees: [],
};
console.log("copyAccountingDepartment :>> ", copyAccountingDepartment);
// ----- IT Department ---- //
const itDepartment = ITDepartment.getInstance();
console.log(accountingDepartment);
itDepartment.describe();
itDepartment.printEmployees();
itDepartment.addEmployee("Bob");
itDepartment.printEmployees();
console.log("servers", itDepartment.availableServerNames);
itDepartment.availableServerName = "aws";
console.log("servers " + itDepartment.availableServerNames);
console.log(ITDepartment.defaultName);
