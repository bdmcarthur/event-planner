import React, { Component } from "../../node_modules/react";
import FontPicker from "../../node_modules/font-picker-react";

export default class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFontFamily: this.props.defaultFont
    };
  }
  fontChange = nextFont => {
    this.setState({
      activeFontFamily: nextFont.family
    });
    this.props.fontChange(this.props.name, this.state.activeFontFamily);
  };

  render() {
    let variantType = ["regular"];
    if (this.props.name === "bodyFont") {
      variantType.push("700");
    }
    return (
      <div>
        <FontPicker
          limit="100"
          apiKey="AIzaSyCEyYQk3f2B4mJcDurWnbnXPIHX23UiPwM"
          activeFontFamily={this.state.activeFontFamily}
          onChange={nextFont => this.fontChange(nextFont)}
          variants={variantType}
          pickerId={this.props.name}
        />
      </div>
    );
  }
}
