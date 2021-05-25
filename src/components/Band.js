import React, { Component } from "react";

class Band extends Component {
  render() {
    return (
      <div>
        <li>
          {this.props.name}
          <button onClick={(band) => this.props.delete(this.props.id)}>
            Delete
          </button>
        </li>
      </div>
    );
  }
}

export default Band;
