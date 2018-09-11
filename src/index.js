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
    let response;
    if (this.props.linkStyle === "highlight1") {
      response = (
        <a className="TwoPartsLinks_highlight1" href={this.props.href}>
          <span className="TwoPartsLinks_highlight1_title">
            <span
              className="TwoPartsLinks_highlight1_first-word"
              data-hover={this.props.firstPart}
            >
              {this.props.firstPart}
            </span>{" "}
            <span
              className="TwoPartsLinks_highlight1_second-word"
              data-hover={this.props.secondPart}
            >
              {this.props.secondPart}
            </span>
          </span>
        </a>
      );
    } else if (this.props.linkStyle === "highlight2") {
      response = (
        <a class="TwoPartsLinks_highlight2 codepen" href={this.props.href}>
          <div class="social-cube">
            <div class="front">{this.props.firstPart}</div>
            <div class="bottom">{this.props.secondPart}</div>
          </div>
        </a>
      );
    } else {
      response = null;
    }
    return response;
  }
}
