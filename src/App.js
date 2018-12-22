import React, { Component } from 'react';
import Joke from './Components/Joke/Joke';
import jokesData from './Components/Joke/JokesData';

export default class App extends Component {
  render() {
    const jokesComponent = jokesData.map( joke => <Joke question={joke.question} punchLine={joke.punchLine} key={joke.id} />);
    return (
      <div className="App">
        {jokesComponent}
      </div>
    );
  }
}
