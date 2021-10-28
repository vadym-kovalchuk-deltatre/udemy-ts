export abstract class Department {
	protected employees: string[] = [];

	constructor(public readonly id: number, public departmentName: string) {}

	describe(this: Department) {
		console.info(`dep id: ${this.id} dep name: ${this.departmentName}`);
	}

	addEmployee(name: string) {
		this.employees.push(name);
	}

	abstract printEmployees(): void | never;
}
