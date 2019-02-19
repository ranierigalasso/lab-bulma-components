import React, { Component } from 'react';
import classnames from 'classnames';

class CoolButton extends Component {
  render() {
    const str = `button ${classnames(this.props)}`
    return (
      <div>
        <button className={str}>Button</button>
      </div>
    );
  }
}

export default CoolButton;