import React from "react";
import "./index.css";

export default class AwesomeLinks extends React.Component {
  render() {
    const { children } = this.props;
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { className: this.props.linkStyle })
    );
    return childrenWithProps;
  }
}

export class TwoPartsLinks extends React.Component {
  render() {
    return (
      <a className="TwoPartsLinks">
        <span className="TwoPartsLinks_title">
          <span
            className="TwoPartsLinks_first-word"
            data-hover={this.props.firstWord}
          >
            {this.props.firstWord}
          </span>{" "}
          <span
            className="TwoPartsLinks_second-word"
            data-hover={this.props.secondWord}
          >
            {this.props.secondWord}
          </span>
        </span>
      </a>
    );
  }
}
