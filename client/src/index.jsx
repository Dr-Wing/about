import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: ""
    };
  }

  componentDidMount() {
    fetch("/about/HIJ", {
      method: "GET"
    })
      // .then(result => {
      //   return result.json();
      // })
      .then(data => {
        console.log("data from get request:", data);
      });
  }

  render() {
    return <div>Hey hey</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
