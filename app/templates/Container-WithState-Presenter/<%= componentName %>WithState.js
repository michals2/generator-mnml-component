import { withStateHandlers } from "recompose";
import <%= componentName %>Presenter from "./<%= componentName %>Presenter";

const withState = withStateHandlers(
  // TODO: add state and handlers using recompose --> https://github.com/acdlite/recompose/blob/master/docs/API.md#withstatehandlers
);

const <%= componentName %>WithState = withState(<%= componentName %>Presenter);
<%= componentName %>WithState.displayName = "<%= componentName %>WithState";

export default <%= componentName %>WithState;
