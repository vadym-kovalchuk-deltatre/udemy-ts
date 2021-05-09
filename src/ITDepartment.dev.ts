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

	/**
	 * Remove server from servers list
	 * @param {string} name
	 * @return {void}
	 */
	removeServerName(name: string): void {
		const isExist = (serverName: string) => serverName == name;
		let removedArr = [];
		const index = this.serverNames.findIndex(isExist);
		const msg = `Server ${name} `;
		if (index !== -1) {
			removedArr = this.serverNames.splice(index, 1);
		}
		console.info(removedArr.length > 0 ? msg + "removed" : msg + "not found");
	}

	printEmployees(): void | never {
		if (this.employees.length > 4) throw new Error("There're lot of employees");
		console.info(`${this.departmentName} employees: ${this.employees}`);
	}

	static getInstance() {
		if (!ITDepartment.instance) {
			this.instance = new ITDepartment(3);
		}
		return this.instance;
	}
}
