import { CircularProgress } from "@material-ui/core";
import React from "react";
import "./page-spinner.component.scss";

export default function PageSpinner(): JSX.Element {
	return <CircularProgress size={120} className="spinner mx-auto" />;
}