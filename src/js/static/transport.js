import Tone from 'tone';

class Transport {

    /* provide a function that will be called every pulse when running
    */
    constructor() {
        let self = this;
        this.bpm = 120;   // beats per minute 
        this.stepsize = 4; // 4 per beat (== 16th)
        this.position = 0;
        this.maxPositions = 16; // number of 'stepsizes' per bar; 

        this.pulse = () => { };

        Tone.Transport.scheduleRepeat(time => {
            this.pulse({ time: time, position: this.position });
            this.position++;
            if (this.position >= this.maxPositions) {
                this.position = 0;
            }
        }, this.pulseLength());
        this.running = false;
    }

    pulseLength() {
        // 60s / bpm = length of 1 beat
        // 1beat / stepsize = length of pulse
        return 60.0 / this.bpm / this.stepsize;
    }

    start() {
        this.position = 0;
        Tone.Transport.bpm.value = this.bpm;
        Tone.Transport.start();
        this.running = true;
    }

    stop() {
        Tone.Transport.stop();
        this.position = 0;
        this.running = false;
    }
}

export let transport = new Transport();