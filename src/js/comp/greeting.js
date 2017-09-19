import React from 'react';
import Tone from 'tone';
import UJPlaybutton from './molecules/playbutton/playbutton.jsx';
class Greeting extends React.Component {
  render() {
    return <div>
      <h1>Hello, {this.props.name}</h1>
      <UJPlaybutton />
    </div>;
  }
}


module.exports = Greeting;