import { CircularProgress } from "@material-ui/core";
import React from "react";
import "./with-spinner.component.scss";

interface WithSpinnerComponentProps {
	isLoading: boolean;
}

export default function WithSpinnerComponent<T>(WrappedComponent: React.ComponentType<T>):
	React.FunctionComponent<T & WithSpinnerComponentProps> {
	const Spinner = ({ isLoading, ...otherProps }: WithSpinnerComponentProps) => (
		isLoading ? <div>
			<CircularProgress size={120} className="spinner mx-auto" />
		</div> : <WrappedComponent {...otherProps as T} />
	);

	return Spinner;
}