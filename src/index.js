import React from "react";
import "./index.css";
import { css } from "emotion";

class AwesomeLinks extends React.Component {
  render() {
    const { children } = this.props;

    const childrenWithProps = React.Children.map(children, child => {
      let className = child.props.className
        ? this.props.linkStyle + " " + child.props.className
        : this.props.linkStyle;

      if (this.props.customStyles) {
        let styles = customStyles(
          this.props.linkStyle,
          this.props.customStyles
        );
        className += " " + css(styles);
      }

      return React.cloneElement(child, {
        className: className
      });
    });

    return childrenWithProps;
  }
}

export default AwesomeLinks;

const customStyles = (linkstyle, styles) => {
  let newStyles = {};
  if (styles.linkColor) {
    newStyles.color = styles.linkColor;
  }
  if (styles.linkHoverColor) {
    newStyles["&:hover"] = { color: styles.linkHoverColor + " !important" };
  }
  switch (linkstyle) {
    case "highlight1": {
      if (styles.color1) {
        newStyles["&::after"] = {
          "background-color": styles.color1
        };
      }
      break;
    }
    case "highlight2": {
      if (styles.color1) {
        newStyles["--style-color1"] = styles.color1;
      }
      if (styles.color2) {
        newStyles["--style-color2"] = styles.color2;
      }
      if (styles.color3) {
        newStyles["--style-color3"] = styles.color3;
      }
      break;
    }
    case "highlight3": {
      if (styles.color1) {
        newStyles["--style-color1"] = styles.color1;
      }
      break;
    }
    case "highlight4": {
      if (styles.color1) {
        newStyles["--style-color1"] = styles.color1;
      }
      break;
    }
    case "highlight5": {
      if (styles.color1) {
        newStyles["--style-color1"] = styles.color1;
      }
      if (styles.color2) {
        newStyles["--style-color2"] = styles.color2;
      }
      break;
    }
    case "highlight9": {
      if (styles.color1) {
        newStyles["--style-color1"] = styles.color1;
      }
      if (styles.color2) {
        newStyles["--style-color2"] = styles.color2;
      }
      break;
    }
    case "highlight11": {
      if (styles.color1) {
        newStyles["--style-color1"] = styles.color1;
      }
    }
    break;
  }
  if (linkstyle.includes("highlight6")) {
    if (styles.color1) {
      newStyles["--style-color1"] = styles.color1 + "!important";
    }
  }
  if (
    linkstyle.includes("highlight7") ||
    linkstyle.includes("highlight8") ||
    linkstyle.includes("highlight10")
  ) {
    if (styles.color1) {
      newStyles["--style-color1"] = styles.color1;
    }
    if (styles.color2) {
      newStyles["--style-color2"] = styles.color2;
    }
  }

  return newStyles;
};

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

export class RotateText extends React.Component {
  render() {
    return (
      <a class="Rotate_text" href={this.props.href}>
        <span class="Rotate_text_Span">
          {this.props.children}
        </span>
      </a>
    )
  }
}

export class FlipButton extends React.Component {
  render() {
    return (
     <div class="Button_flip_container">   
          <a class="Button_flip"  href={this.props.href}>
              <button class="Flip_front_button"> {this.props.children}</button>
              <button class="Flip_back_button" > {this.props.children}</button>
          </a>   
      </div>
      )
  }
}
