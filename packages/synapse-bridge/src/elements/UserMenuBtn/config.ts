import { tokens } from "@cnamts/design-tokens";

export const config = {
	menu: {
		offsetY: true,
		location: "bottom left",
		zIndex: 4,
		minWidth: "198px",
		maxWidth: "198px",
		nudgeRight: 0,
	},
	btn: {
		variant: "text",
		height: "auto",
	},
	icon: {
		color: tokens.colors.cyan.darken20,
	},
	logoutListItem: {
		class: "text-primary",
		minWidth: "198px",
	},
	logoutIcon: {
		color: "primary",
		class: "mr-4",
	},
};
