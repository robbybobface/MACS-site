import { nanoid } from "nanoid";

export const Hexagons = [
	{
		id: nanoid(),
		q: 0,
		r: -1,
		s: 1,
		moduleType: undefined,
		mainModule: true,
	},
	{
		id: nanoid(),
		q: -1,
		r: 0,
		s: 1,
		moduleType: "dial",
		configuration: {
			input: [
				{
					start: 0,
					end: 100,
				},
			],
		},
	},
	{
		id: nanoid(),
		q: -1,
		r: 1,
		s: 0,
		moduleType: "button",
		configuration: {},
	},
	{
		id: nanoid(),
		q: 1,
		r: -1,
		s: 0,
		moduleType: "slider",
		configuration: {
			input: [
				{
					start: 0,
					end: 100,
				},
			],
		},
	},
	{
		id: nanoid(),
		q: 1,
		r: 0,
		s: -1,
		moduleType: "joystick",
		configuration: {
			behavior: "default",
		},
	},
	{
		id: nanoid(),
		q: 0,
		r: 1,
		s: -1,
		moduleType: "switch",
		configuration: {},
	},
];
