import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import <%= componentName %>WithState from "./<%= componentName %>WithState";
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

const <%= componentName %>Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= componentName %>WithState);

<%= componentName %>Container.displayName = "<%= componentName %>Container";

export default <%= componentName %>Container;
