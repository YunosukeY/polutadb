import * as React from "react";
import * as ReactDOM from "react-dom";
import { Header, Footer } from "./common";
import { Main } from "./app";

class Root extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.querySelector("#root"));
