import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './greeting';
import Transport from '../transport';
import Tone from 'tone';

class MainInterface extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //create a synth and connect it to the master output (your speakers)
        var synth = new Tone.Synth().toMaster();
        this.transport = new Transport(p => {
            console.log(p.position);
            synth.triggerAttackRelease("C4", "32n");
        });
        //play a middle 'C' for the duration of an 8th note
       
        
     //   this.transport.start();

        return (
            <div className="main">
                <h1>Ultraviolent Junglist</h1>
                <Greeting name="timmy" />
            </div>
        );
    }
}

ReactDOM.render(
    <MainInterface />,
    document.getElementById('contents')
)