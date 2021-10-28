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

type Box<Type> = {
	w: Type;
	h: Type;
	xPos: Type;
	yPos: Type;
};
type Unit = number;
interface Circle {
	r?: number;
	xPos?: number;
	yPos?: number;
}
type Figure = Box<Unit> & Circle;
const drawFigure = ({ w, h, xPos = 2, yPos = 10 }: Figure): string =>
	`width:${w}, height:${h}, xPos:${xPos}, yPos:${yPos}}`;
const box: Box<number> = { w: 200, h: 300, xPos: 0, yPos: 0 };
console.log(drawFigure({ w: 200, h: 100, xPos: 54, yPos: 0 }));

type Rectangle<Type> = { w: number; h: number; type: Type };
type SquareBox<Type> = { w: number; type: Type };
type Corner = Rectangle<"rectangle"> | SquareBox<"box">;

function calculateSquare(figure: Corner): number {
	let square: number;
	switch (figure.type) {
		case "rectangle":
			square = figure.w * figure.h;
			break;
		case "box":
			square = Math.pow(figure.w, 2);
			break;
		default:
			square = 0;
	}
	return square;
}

// console.log(calculateSquare({ w: 200, h: 20, type: "rectangle" }));
console.log(calculateSquare({ w: 30, type: "box" }));
