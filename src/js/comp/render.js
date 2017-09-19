import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './greeting';

class MainInterface extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: { myBar: "bazzi and adriaan" }
        };
    }

    render() {
        var myFoo = this.state.foo;
        return (
            <div className="main">
                <h1>Ultraviolent Junglist</h1>
                <div>{myFoo.myBar}</div>
                <Greeting name="timmy" />
            </div>
        );
    }
}

ReactDOM.render(
    <MainInterface />,
    document.getElementById('contents')
)