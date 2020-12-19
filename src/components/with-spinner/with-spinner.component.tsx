import React from "react";
import PageSpinner from "../page-spinner/page-spinner.component";

interface WithSpinnerComponentProps {
	isLoading: boolean;
}

export default function WithSpinnerComponent<T>(WrappedComponent: React.ComponentType<T>):
	React.FunctionComponent<T & WithSpinnerComponentProps> {
	const Spinner = ({ isLoading, ...otherProps }: WithSpinnerComponentProps) => (
		isLoading ? <PageSpinner /> : <WrappedComponent {...otherProps as T} />
	);

	return Spinner;
}