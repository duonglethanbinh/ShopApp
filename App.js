import React from "react";
import axios from "axios";

import AppNavigator from "./AppNavigator";

axios.defaults.baseURL = "http://localhost:3000";
export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
