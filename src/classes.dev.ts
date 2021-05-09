import { AccountDepartment } from "../src/AccountDepartment.dev";
import { ITDepartment } from "./ITDepartment.dev";
//  Simple accounting department  //
const accountingDepartment = new AccountDepartment(1, "accounting");
accountingDepartment.printEmployees();
accountingDepartment.addEmployee("TeeZ0NE");
accountingDepartment.printEmployees();

const copyAccountingDepartment = {
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
