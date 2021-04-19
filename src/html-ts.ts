const btn = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add2inputs(num1: number, num2: number): number {
	return num1 + num2;
}

btn.addEventListener("click", () =>
	console.log(add2inputs(+input1.value, +input2.value))
);
