import React, { Component } from 'react'

const TITLES = [
    "a software engineer",
    "a movie lover",
    "a guitar lover",
    "an adventure lover",
]

export default class Title extends Component {
  state = {titleIndex: 0, fadeIn: true};

  componentDidMount(){
    setTimeout(() => this.setState({ fadeIn: false }), 2000);
    this.animateTitle();
  }

  componentWillUnmount(){
    clearInterval(this.titleInterval);
    console.log("component will unmount");
  };

  animateTitle(){
    this.titleInterval = setInterval(()=>{
      const titleIndex = (this.state.titleIndex + 1)% TITLES.length;
      this.setState({ titleIndex, fadeIn: true });
      setTimeout(() => this.setState({ fadeIn: false }), 2000);
    }, 4000);
  };

  render() {
    const { titleIndex, fadeIn } = this.state;
    const title = TITLES[titleIndex];
    return (
      <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
    )
  }
}
