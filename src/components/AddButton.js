import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/AddButton.css';

class AddButton extends React.Component {
  onKeyUp(event) {
    if (event.key === 'Enter') {
      this.props.onClick(event);
    }
  }

  render() {
    return (
      <div
        className={styles.addButton}
        tabIndex={0}
        onClick={this.props.onClick}
        onKeyUp={e => this.onKeyUp(e)}
        role="button"
      >
        <span>+</span>
      </div>
    );
  }
}

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddButton;
