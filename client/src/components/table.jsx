const React = require("react");
import PropTypes from "prop-types";

const Table = props => {
  console.log("props from Table", props);
  return (
    <table>
      <thead></thead>
      <tbody>
        <tr>
          <td>
            CEO<br></br>
            {props.about.CEO}
          </td>
          <td>
            Employees<br></br>
            {props.about.employees}
          </td>
          <td>
            Headquarters<br></br>
            {props.about.headquarters}
          </td>
          <td>
            Founded<br></br>
            {props.about.founded}
          </td>
        </tr>
        <tr>
          <td>
            Market Cap<br></br>
            {props.about.marketCap}
          </td>
          <td>
            Price-Earnings Ratio<br></br>
            {props.about.priceEarnings}
          </td>
          <td>
            Dividend Yield<br></br>
            {props.about.dividendYield}
          </td>
          <td>
            Average Volume<br></br>
            {props.about.averageVolume}
          </td>
        </tr>
        <tr>
          <td>
            High Today<br></br>
            {props.about.high}
          </td>
          <td>
            Low Today<br></br>
            {props.about.low}
          </td>
          <td>
            Open Price<br></br>
            {props.about.open}
          </td>
          <td>
            Volume<br></br>
            {props.about.volume}
          </td>
        </tr>
        <tr>
          <td>
            52 Week High<br></br>
            {props.about.yearHigh}
          </td>
          <td>
            52 Week Low<br></br>
            {props.about.yearLow}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
