import { createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export const appTheme = createMuiTheme({
	typography: {
		fontFamily: [
			"Saira",
			"sans-serif"
		].join(",")
	},
	palette: {
		primary: {
			main: "#000"
		},
		secondary: blue
	}
});