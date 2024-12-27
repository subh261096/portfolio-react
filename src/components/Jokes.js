import React, {Component} from 'react'

export default class Jokes extends Component {
  state = {json: {} }

  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    .then(response => response.json())
    .then(data => this.setState({json: data[0]}))
  };
  
  render() {
    const {setup, punchline} = this.state.json;
    return (
      <>
        <h2>Highlighted Joke</h2>
        <div>{setup} {punchline}</div>
      </>
    )
  }
}
