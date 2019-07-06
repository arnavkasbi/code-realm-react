import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component {
  render() {
    const {
      title,
      className,
      name,
      type,
      spellcheck,
      maxlength,
      tabindex
    } = this.props;
    return (
      <div>
        <input className={className} name={name} id={name}>
          {title}
        </input>
      </div>
    );
  }
}

Input.propTypes = {
  title: PropTypes.string
};

Input.defaultProps = {
  title: ""
};

export default Input;
