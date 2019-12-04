import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      abridged: true,
      summary: "",
      shortSummary: ""
    };
    this.shortenAbout = this.shortenAbout.bind(this);
  }

  shortenAbout(string) {
    let shortenedSummary = "";
    let sentenceArr = string.split(".");
    for (let i = 0; i < sentenceArr.length; i++) {
      if (i < 6) {
        shortenedSummary += sentenceArr[i];
      }
    }
    return shortenedSummary;
  }
  componentDidUpdate(previousProps, previousState) {
    if (previousProps.about !== this.props.about) {
      let shortSummary = this.shortenAbout(this.props.about);
      this.setState({ summary: this.props.about, shortSummary: shortSummary });
      console.log("state in About component", this.state);
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.shortSummary}</p>
        <p>{this.state.summary}</p>
      </div>
    );
  }
}

export default About;
