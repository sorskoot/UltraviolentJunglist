var React = require('react');

class Greeting extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
  

module.exports = Greeting;