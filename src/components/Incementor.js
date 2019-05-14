import React, { PureComponent } from 'react';

export default class Incrementor extends PureComponent {
state = {
  count: 0
}

countIncrement = () => {
  this.setState(state => {
    console.log(this.state);
    return { count: state.count + 1 };
  });
}

render() {
  const { count } = this.state;
  return (
    <>
      <p>Current count is: {count}</p>
      <button onClick={this.countIncrement}>Increment</button>
    </>
  );
}

}
