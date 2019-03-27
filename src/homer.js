import React, { Component } from 'react';

class homer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          true : false
        };
      }
      handleClick = () => {
        this.setState({ true: !this.state.true });
      };
  render() {
    const working = this.state.true ? 'Working' : 'Holidays';
    return (
      <div className="homer">
        <button
            onClick={this.handleClick}
            className={working}>
            {working.toUpperCase()}
        </button>
        <figure className={working} />
      </div>
    );
  }
}

export default homer;