import React from "react";

class CompanyDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      abridged: true,
      summary: "",
      shortSummary: ""
    };
    this.shortenAbout = this.shortenAbout.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  shortenAbout(string) {
    let shortenedSummary = "";
    let sentenceArr = string.split(".");
    for (let i = 0; i < 6; i++) {
      shortenedSummary += sentenceArr[i];
    }
    return (shortenedSummary += ".");
  }
  componentDidUpdate(previousProps, previousState) {
    if (previousProps.about !== this.props.about) {
      let shortSummary = this.shortenAbout(this.props.about);
      this.setState({ summary: this.props.about, shortSummary: shortSummary });
      console.log("state in About component", this.state);
    }
  }

  onClick() {
    this.state.abridged
      ? this.setState({ abridged: false })
      : this.setState({ abridged: true });
  }

  render() {
    return (
      <div>
        {this.state.abridged ? (
          <p>
            {this.state.shortSummary}
            <a onClick={this.onClick}> Read More</a>
          </p>
        ) : (
          <p>
            {this.state.summary}
            <a onClick={this.onClick}> Read Less</a>
          </p>
        )}
      </div>
    );
  }
}

export default CompanyDescription;
