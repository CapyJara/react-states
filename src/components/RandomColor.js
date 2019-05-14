import React, { PureComponent } from 'react';
const chance = require('chance').Chance();

export default class RandomColor extends PureComponent {
  state = {
    color: '',
    trigger: new Date(),
    img: ''
  }

  randomColor = () => {
    const color = chance.pickone(['red', 'blue', 'green', 'yellow', 'orange', 'purple']);
    return color;
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({ color: this.randomColor(), trigger: new Date(), img: '' });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.color === this.state.color) {
      this.setState({ img: 'https://thumbs.gfycat.com/DemandingWelltodoGallinule-poster.jpg' });
    }
  }

  render() {
    const { color, img } = this.state;
    const styles = {
      background: img ? `center / contain url(${img}` : color,
      width: '50em',
      height: '50em'
    };
    return <div style={styles}></div>;
  }
}
