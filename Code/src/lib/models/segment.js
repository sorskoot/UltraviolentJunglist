import Tone from 'tone';
import { settings, transport } from '../';

export class Segment {

    key = -1;
    bufferStart = 0;
    bufferLength = 1;
    bufferDuration = 0;
    group = 0
    retrigger = 1;

    _buffer = [];

    /**
    * A segment with buffers.
    * @constructor
    * @param {AudioBufferSourceNode} author - The author of the book.
    */
    constructor(key, audioBuffer) {
        this.key = key;
        this.createBuffer(audioBuffer);
    }

    createBuffer(buffer, start, length) {
        if (!buffer) return;

        this.buffer = Tone.context.createBuffer(2, buffer.length, buffer.sampleRate);

        for (var channel = 0; channel < buffer.numberOfChannels; channel++) {
            // This gives us the actual ArrayBuffer that contains the data
            this.buffer.copyToChannel(buffer.getChannelData(channel), channel);
        }

        this.bufferStart = start;
        this.bufferLength = length;
        this.bufferDuration = this.buffer.duration;

    }

    trigger() {
        let length = transport.beat();
        const duration = length / this.retrigger;
        for (let i = 0; i < this.retrigger; i++) {
            let bufferSource = Tone.context.createBufferSource();
            bufferSource.connect(Tone.context.destination);
            bufferSource.buffer = this.buffer;

            let d = i * duration;
            let n = Tone.context.currentTime + settings.latency + d;

            bufferSource.start(
                n,
                this.bufferStart * this.bufferDuration,

                (this.bufferLength / this.retrigger) * this.bufferDuration
            )
        }



        //this.buffer.stop (n + this.duration * this.bufferLength);
        // trigger the sourceBuffer
    }

}