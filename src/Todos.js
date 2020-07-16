import React, { Component } from 'react';
import Child from './Child'


class Todos extends Component {
  render() {
    return (
      <div>
        <Child todos={this.props.todos} />
      </div>
    );
  }
}

export default Todos;