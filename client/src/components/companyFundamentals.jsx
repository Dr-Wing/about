import React from "react";
import PropTypes from "prop-types";

class CompanyFundamentals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.data !== this.props.data) {
      console.log("props in table", this.props.data);
      let innerArr = [];
      let outerArr = [];
      let props = this.props.data;
      let store = [
        { key: "CEO", label: "CEO", value: "" },
        { key: "employees", label: "Employees", value: "" },
        { key: "headquarters", label: "Headquarters", value: "" },
        { key: "founded", label: "Founded", value: "" },
        { key: "marketCap", label: "Market Cap", value: "" },
        { key: "priceEarnings", label: "Price-Earnings", value: "" },
        { key: "dividendYield", label: "Dividend Yield", value: "" },
        { key: "averageVolume", label: "Average Volume", value: "" },
        { key: "high", label: "High Today", value: "" },
        { key: "low", label: "Low Today", value: "" },
        { key: "open", label: "Open Price", value: "" },
        { key: "volume", label: "Volume", value: "" },
        { key: "yearHigh", label: "52 Week High", value: "" },
        { key: "yearLow", label: "52 Week Low", value: "" }
      ];
      // assign values based on props
      for (let i = 0; i < store.length; i++) {
        for (let key in props) {
          if (store[i].key === key) {
            store[i].value = props[key];
            break;
          }
        }
        // split into arrays for table rows
        innerArr.push(store[i]);
        if (i === 3 || i === 7 || i === 11 || i === 13) {
          outerArr.push(innerArr);
          innerArr = [];
        }
      }
      store = outerArr;
      console.log("store", store);
      this.setState({ store });
    }
    console.log("state in table component", this.state);
  }

  render() {
    return (
      <table>
        <thead></thead>
        <tbody className="table">
          {this.state.store ? (
            // map rows
            this.state.store.map((row, i) => {
              return (
                <tr className="row" key={i}>
                  {// map cells
                  row.map((cell, j) => {
                    return (
                      <td className="cell" key={j}>
                        <span className="bold">{cell.label}</span>
                        <br></br>
                        {cell.value}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default CompanyFundamentals;
