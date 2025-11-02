import { defineField, defineType } from "sanity";
import { PiCalendarBlank } from "react-icons/pi";

export const eventType = defineType({
	name: "event",
	title: "Upcoming Events",
	type: "document",
	icon: PiCalendarBlank,
	fields: [
		defineField({
			name: "eventName",
			title: "Event Name",
			type: "string",
			description: "A short title for the upcoming event",
			validation: (rule) =>
				rule
					.required()
					.max(40)
					.warning("The title shouldn't be more than 40 characters."),
		}),
		defineField({
			name: "eventImage",
			title: "Event Image",
			type: "image",
			description: "Add an image for the event",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "eventDate",
			title: "Event Link",
			type: "string",
			placeholder: "10/11/2025",
			description: "Add the date of the event",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "eventDescription",
			title: "Event Description",
			type: "text",
			description: "Describe what the event is",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "eventLink",
			title: "Event Link",
			type: "string",
			description: "The link to the event",
			validation: (rule) => rule.required(),
		}),
	],
});
