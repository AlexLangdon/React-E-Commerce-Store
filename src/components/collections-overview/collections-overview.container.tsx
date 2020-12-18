import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { isFetchingCollections } from "../../redux/store-items/store-items.slice";
import WithSpinnerComponent from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = (state: RootState) => (
	{ isLoading: isFetchingCollections(state) }
);

const CollectionsOverviewContainer = connect(mapStateToProps)(
	WithSpinnerComponent(
		CollectionsOverview
	)
);

export default CollectionsOverviewContainer;