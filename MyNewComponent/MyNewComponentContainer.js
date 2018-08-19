import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MyNewComponentPresenter from "./MyNewComponentPresenter";
// TODO: import action creators

const actionCreators = {
  // TODO: add action creators
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

const mapStateToProps = state => {
  const {
    // TODO: destructure state fields
  } = state;
  return {
    state: {
      // TODO: add state fields
    }
  };
};

const MyNewComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyNewComponentPresenter);

MyNewComponentContainer.displayName = "MyNewComponentContainer";

export default MyNewComponentContainer;
