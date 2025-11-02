import { defineField, defineType } from "sanity";

import { Center, Left, Right, Justify } from "../lib/blockIcons";
import { TextAlign } from "../components/TextAlign";

const block = {
	type: "block",

	marks: {
		decorators: [
			{ title: "Strong", value: "strong" },
			{ title: "Emphasis", value: "em" },
			{
				title: "Center",
				value: "center",
				icon: Center,
				component: (props) => TextAlign(props),
			},
			{
				title: "Right",
				value: "right",
				icon: Right,
				component: (props) => TextAlign(props),
			},
			{
				title: "Left",
				value: "left",
				icon: Left,
				component: (props) => TextAlign(props),
			},
			{
				title: "Justify",
				value: "justify",
				icon: Justify,
				component: (props) => TextAlign(props),
			},
		],
	},
};

export const pageIntro = defineType({
	name: "pageIntro",
	title: "Page Intros",
	type: "document",
	fields: [
		defineField({
			name: "home",
			type: "array",
			of: [block],
		}),
		defineField({
			name: "videos",
			type: "array",
			of: [block],
		}),
		defineField({
			name: "activities",
			type: "array",
			of: [block],
		}),
		defineField({
			name: "blog",
			type: "array",
			of: [block],
		}),
		defineField({
			name: "abah",
			title: "Active Baby At Home",
			type: "array",
			of: [block],
		}),
		defineField({
			name: "movers",
			title: "Growing Movers",
			type: "array",
			of: [block],
		}),
		defineField({
			name: "events",
			title: "Upcoming Events",
			type: "array",
			of: [block],
		}),
	],
});
