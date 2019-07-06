import React from "react";
import PropTypes from "prop-types";

class Label extends React.Component {
  render() {
    const { title, className, name } = this.props;
    return (
      <div>
        <label className={className} name={name} id={name}>
          {title}
        </label>
      </div>
    );
  }
}

Label.propTypes = {
  title: PropTypes.string
};

Label.defaultProps = {
  title: ""
};

export default Label;
