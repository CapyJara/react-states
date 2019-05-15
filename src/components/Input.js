import React, { PureComponent } from 'react';


export default class displayName extends PureComponent {
  state = {
    name: ''
  };

  handleChange = ({ target }) => {
    setTimeout(() => {
      this.setState({ name: `${target.value}, to you too!` });
    }, 1500);
  }

  render() {
    const { name } = this.state;
    console.log(this.state);
    return (
      <section>
        <input id="name" type="input" onChange={this.handleChange} placeholder=" Enter name here "></input>
        <p>{name}</p>
      </section>
    );
  }
}
