import React, { PureComponent } from 'react';


export default class displayName extends PureComponent {
  state = {
    mock: '',
    inputState: ''
  };

  handleChange = ({ target }) => {
    this.setState({ inputState: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ mock: `${this.state.inputState}, to you too!` });
  }

  render() {
    const { mock, inputState } = this.state;
    // console.log(this.state);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="input" onChange={this.handleChange} placeholder=" Enter message here " value={inputState}></input>
          <button>Update</button>
        </form>
        <p>{mock}</p>
      </>
    );
  }
}
