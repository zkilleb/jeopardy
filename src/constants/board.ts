export const board = [
	[
		{} as ICategory,
		{} as IBoard,
		{} as IBoard,
		{} as IBoard,
		{} as IBoard,
		{} as IBoard,
	],
	[
		{} as ICategory,
		{} as IBoard,
		{} as IBoard,
		{} as IBoard,
		{} as IBoard,
		{} as IBoard,
	],
	[
		{} as ICategory,
		{} as IBoard,
		{} as IBoard,
		{} as IBoard,
		{} as IBoard,
		{} as IBoard,
	],
	[
		{} as ICategory,
		{} as IBoard,
		{} as IBoard,
		{} as IBoard,
		{} as IBoard,
		{} as IBoard,
	],
	[
		{} as ICategory,
		{} as IBoard,
		{} as IBoard,
		{} as IBoard,
		{} as IBoard,
		{} as IBoard,
	],
	[
		{} as ICategory,
		{} as IBoard,
		{} as IBoard,
		{} as IBoard,
		{} as IBoard,
		{} as IBoard,
	],
];

interface IBoard {
	question: string;
	answer: string;
	amount: number;
	img?: any;
}

interface ICategory {
	category: string;
	note?: string;
}
