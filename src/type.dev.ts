type Abc = (a: number, b: number) => number;

let abc: Abc = (a: number, b: number) => a + b;

console.log(abc(2, 3));

// The same via interface //
interface AbcInt {
	a: number;
	b: number;

	sum(a: number, b: number): number;
}

let abcInt: AbcInt = {
	a: 1,
	b: 2,
	sum(a: number, b: number): number {
		return a + b;
	},
};
console.log(abcInt.sum(abcInt.a, abcInt.b));

interface StringArray2 {
	readonly [index: string]: number | string;
	animal: string;
	age: number;
	name: string;
}

const arr2: StringArray2 = { animal: "dog", name: "bob", 2: 12, age: 2 };
console.log(arr2[2]);

interface Box<Type> {
	w: Type;
	h: Type;
	xPos?: Type;
	yPos?: Type;
}
interface Unit {
	w: number;
}
interface Circle {
	r?: number;
	xPos?: number;
	yPos?: number;
}
type Figure = Box<number> & Circle;
const drawFigure = ({ w, h, xPos = 2, yPos = 10 }: Figure): string =>
	`width:${w}, height:${h}, xPos:${xPos}, yPos:${yPos}`;
const box: Box<number> = { w: 200, h: 300 };
console.log(drawFigure({ w: 200, h: 100, xPos: 54 }));
