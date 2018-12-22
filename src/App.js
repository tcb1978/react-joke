import React, { Component } from 'react';
import Joke from './Components/Joke/Joke';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Joke
          question="What's the best thing about Switzerland?"
          punchLine="I don't know, but the flag is a big plus!"
      />

      <Joke
          question="Did you hear about the mathematician who's afraid of negative numbers?"
          punchLine="He'll stop at nothing to avoid them!"
      />

      <Joke
          question="Hear about the new restaurant called Karma?"
          punchLine="There’s no menu: You get what you deserve."
      />

      <Joke
          question="Did you hear about the actor who fell through the floorboards?"
          punchLine="He was just going through a stage."
      />
      </div>
    );
  }
}
