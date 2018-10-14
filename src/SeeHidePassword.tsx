import * as React from "react";
import * as FontAwesome from "react-fontawesome";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";

const style: React.CSSProperties = {
  color: "#0080cc",
  cursor: "pointer"
};

class SeeHidePassword extends React.Component<SeePasswordProps> {
  public render() {
    return (
      <InputAdornment style={style} position="start">
        <div aria-label={this.getAriaLabel()} onClick={this.props.onClick}>
          <FontAwesome name={this.getIcon()} />
        </div>
      </InputAdornment>
    );
  }

  private getAriaLabel() {
    const { isPasswordVisible } = this.props;

    return isPasswordVisible ? "Hide the password" : "See the password";
  }

  private getIcon() {
    return this.props.isPasswordVisible ? "eye-slash" : "eye";
  }
}

export interface SeePasswordProps {
  isPasswordVisible: boolean;
  onClick: () => void;
}

export default SeeHidePassword;
