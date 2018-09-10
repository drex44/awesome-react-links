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
