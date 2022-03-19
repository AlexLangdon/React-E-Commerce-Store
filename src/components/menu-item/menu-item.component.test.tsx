import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import MenuItem from "./menu-item.component";

describe("MenuItem", () => {
	it("should show test title", () => {
		const props = {
			title: "Test Title"
		} as any;
		const { getByText } = render(
			<BrowserRouter>
				<MenuItem {...props} />
			</BrowserRouter>
		);
		const title = getByText("Test Title");
		expect(title).toBeInTheDocument();
	});
});