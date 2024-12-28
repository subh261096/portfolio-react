import React, {Component} from 'react'


const Joke = ({ joke: { setup, punchline}}) =>{console.log(setup,punchline);
  return (
  <p style={{margin: 20}}>{setup} <em>{punchline}</em></p>
)}

export default class Jokes extends Component {
  state = {joke: {}, ten_jokes: []};

  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    .then(response => response.json())
    .then(data => this.setState({joke: data[0]}))
  };

  fetchTenJokes = () => {
    fetch("https://official-joke-api.appspot.com/jokes/programming/ten")
    .then(response => response.json())
    .then(data => this.setState({ten_jokes: data}))
  };
  
  render() {
    return (
      <>
        <h2>Highlighted Joke</h2>
        <Joke joke={this.state.joke} />
        <hr />
        <h3>10 more jokes</h3>
        <button onClick={this.fetchTenJokes} type='submit'>Fetch jokes!</button>
        {this.state.ten_jokes.map(joke => {
          <Joke key={joke.id} joke={joke} />
        })}
      </>
    )
  }
}
