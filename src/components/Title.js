import React, { Component } from 'react'

const TITLES = [
    "a software engineer",
    "a movie lover",
    "a guitar lover",
    "an adventure lover",
]

export default class Title extends Component {
  state = {titleIndex: 0}

  componentDidMount(){
    this.animateTitle();
  }
  componentWillUnmount(){
    clearInterval(this.titleInterval);
    console.log("component will unmount");
  };
  animateTitle(){
    this.titleInterval = setInterval(()=>{
      const titleIndex = (this.state.titleIndex + 1)% TITLES.length;
      this.setState({ titleIndex });
    }, 4000);
  }
  render() {
    const title = TITLES[this.state.titleIndex];
    return (
      <p>I am {title}</p>
    )
  }
}
