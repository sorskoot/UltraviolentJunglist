import Tone from 'tone';
import { EventEmitter } from 'events';

export class Transport {

    pulse = (p) => { };

    constructor() {
        this.position = 0;
        this.bpm = 170;
        Tone.Transport.scheduleRepeat(function (time) {
            this.pulse(this.position);
            // //      self.dispatchEvent("pulse", { time: time, position: self.position });
            this.position++;
            if (this.position >= 16)
                this.position = 0;
        }.bind(this), "4n");
    }

    start() {
        this.position = 0;
        Tone.Transport.loopStart = 0;
        Tone.Transport.loopEnd = "1m";
        Tone.Transport.loop = true;
        // this.position = 0;
        Tone.Transport.bpm.value= this.bpm;
        Tone.Transport.start();
        // Tone.Transport.scheduleRepeat(time => {
        //     console.log('ping');
        //    
        // }, "8n");
        // console.log('starting',this.bpm);
        // 
        // Tone.Transport.start();
        // console.log(Tone.Transport.state);;
    }

    stop() {
        Tone.Transport.stop();
    }
}

//export const transport = new Transport();