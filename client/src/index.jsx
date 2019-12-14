import React from "react";
import ReactDOM from "react-dom";
import CompanyFundamentals from "./components/companyFundamentals.jsx";
import CompanyDescription from "./components/companyDescription.jsx";
import config from "../../env.config.js";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        ticker: "ABCD",
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
    const ticker = this.state.data.ticker;
    fetch(
      `${config.SERVICE_API_URL}:${config.SERVICE_API_PORT}/about/${ticker}`,
      {
        method: "GET"
      }
    )
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
          <CompanyDescription about={this.state.data.about} />
        </div>
        <CompanyFundamentals data={this.state.data} />
      </div>
    );
  }
}

ReactDOM.render(<About />, document.getElementById("about"));

export default About;
