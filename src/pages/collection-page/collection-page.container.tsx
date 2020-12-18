import { connect } from "react-redux";
import WithSpinnerComponent from "../../components/with-spinner/with-spinner.component";
import { RootState } from "../../redux/root-reducer";
import { isFetchingCollections } from "../../redux/store-items/store-items.slice";
import CollectionPage from "./collection-page.component";

const mapStateToProps = (state: RootState) => (
	{ isLoading: isFetchingCollections(state) }
);

const CollectionsPageContainer = connect(mapStateToProps)(
	WithSpinnerComponent(
		CollectionPage
	)
);

export default CollectionsPageContainer;