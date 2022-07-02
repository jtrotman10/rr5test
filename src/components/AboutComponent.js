

import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

// A simple component that shows the pathname of the current location
class AboutComponent extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const { history } = this.props;

    return <div><h2>About</h2><button onClick={()=>history.push("/topics")}>Click Me for Topics</button></div>;
  }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
export default withRouter(AboutComponent);