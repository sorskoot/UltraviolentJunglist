/// <reference path="../../../typings/tone.d.ts" />

import React from 'react';
import ReactDOM from 'react-dom';
import Tone from 'tone';
import TrackEditor from './trackEditor';
import ToggleButton from './toggleButton';

import { transport } from '../static/transport';
import { sampler } from '../static/sampler';


class MainInterface extends React.Component {

    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.sampler = sampler;
        this.samples = [];
        this.sampler.load().then(d => {
            this.samples.push(d);//this.sampler.internalRootPlayer[0].buffer;
        });
        this.volume = 1.0;
        this.position = 0;
        //var synth = new Tone.Synth().toMaster();

        transport.pulse = p => {
            console.log(p.time);
            var trackDesigner = document.querySelector("#trackDesigner");
            trackDesigner.setAttribute("step", p.step);
            let gain = Tone.context.createGain();
            gain.gain.value = this.volume;
            gain.connect(Tone.context.destination);

            let buffer = this.samples[0];
            let source = Tone.context.createBufferSource();
            source.buffer = buffer._buffer;
            source.connect(gain);
            //this.source.stop();
        //    source.start(p.time, 0, transport.pulseLength());
            this.position = p.position;
            //synth.triggerAttackRelease("C4", "32n");
        };
    }

    play() {
        if (transport.running) {
            transport.stop();
        } else {
            transport.start();
        }
    }

    render() {
        return (
            <div className="main">
                <h1>Ultraviolent Junglist</h1>
                <ToggleButton onClick={this.play} />
                <TrackEditor position={this.position} />
            </div>
        );
    }
}

ReactDOM.render(
    <MainInterface />,
    document.getElementById('contents')
)

