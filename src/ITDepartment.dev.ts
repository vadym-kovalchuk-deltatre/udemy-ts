import { Department } from "./Department.dev";
export class ITDepartment extends Department {
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
