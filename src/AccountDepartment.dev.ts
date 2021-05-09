import { Department } from "../src/Department.dev";
export class AccountDepartment extends Department {
	constructor(public readonly id: number, public nameDepartment: string) {
		super(id, nameDepartment);
	}
	printEmployees() {
		console.log("Account department employess: ", this.employees);
	}
}
