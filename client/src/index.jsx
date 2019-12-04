import React from "react";
import ReactDOM from "react-dom";
import Table from "./components/table.jsx";
import About from "./components/about.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        ticker: "",
        about: "",
        CEO: "",
        open: 0,
        high: 0,
        low: 0,
        marketCap: 0,
        yearHigh: 0,
        employees: 0,
        priceEarnings: 0,
        yearLow: 0,
        headquarters: "",
        dividendYield: "",
        founded: 0,
        averageVolume: 0,
        volume: 0
      }
    };
  }

  componentDidMount() {
    // https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
    fetch("/about/RSTU", {
      method: "GET"
    })
      .then(result => {
        return result.json();
      })
      .then(data => {
        console.log("result from get request:", data);
        this.setState({ data });
      });
  }

  render() {
    return (
      <div>
        <div>
          <h1>About {this.state.data.ticker}</h1>
        </div>
        <div>
          <About about={this.state.data.about} />
        </div>
        <Table about={this.state.data} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
