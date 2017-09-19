import Tone from 'tone';

export default class Transport {

    /* provide a function that will be called every pulse when running
    */
    constructor(pulse) {
        let self = this;
        this.bpm = 120;
        this.stepsize = 4;
        this.position = 0;
        this.maxPositions = 16;
        Tone.Transport.scheduleRepeat(time => {
            pulse({ time: time, position: this.position });
            this.position++;
            if (this.position >= this.maxPositions) {
                this.position = 0;
            }
        }, this.stepsize + 'n');
    }

    start(){
        this.position = 0;
        Tone.Transport.bpm.value = this.bpm;
        Tone.Transport.start();
    }

    stop(){
        Tone.Transport.stop();
        this.position = 0;
        this.dispatchEvent("stopped");
    }
}