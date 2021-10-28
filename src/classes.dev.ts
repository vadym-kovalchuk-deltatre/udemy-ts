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
	describe: () =>
		console.info("Copy of AccountDepartment:" + copyAccountingDepartment.id),
	employees: [],
	addEmployee: accountingDepartment.addEmployee,
	printEmployees: accountingDepartment.printEmployees,
};
console.log("copyAccountingDepartment :>> ", copyAccountingDepartment);
copyAccountingDepartment.addEmployee("Boris Johnson");
copyAccountingDepartment.describe();
copyAccountingDepartment.printEmployees();

// ----- IT Department ---- //
const itDepartment = ITDepartment.getInstance();
console.log(accountingDepartment);
itDepartment.describe();
itDepartment.printEmployees();
itDepartment.addEmployee("Bob");
itDepartment.printEmployees();
console.log("servers", itDepartment.availableServerNames);
itDepartment.availableServerName = "aws";
itDepartment.availableServerName = "gDrive";
console.log("servers " + itDepartment.availableServerNames);
console.log(ITDepartment.defaultName);
itDepartment.removeServerName("aws");
