import Tone from 'tone';
import { settings } from '../';

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
        //this.buffer.slice(this.bufferStart * buffer.duration, this.bufferLength * buffer.duration);

        // let buffer = this.player._buffer.get();
        // let length = transport.beat();
        // const duration = length / segmentToPlay.retrigger;

        // for (let i = 0; i < segmentToPlay.retrigger; i++) {
        //     let source = Tone.context.createBufferSource();
        //     let freq = 2000;
        //     let type = "highpass";
        //     let Q = 0.5;
        //     let filter = new Tone.Filter(freq, type);
        //     filter.Q.value = Q;
        //     filter.connect(Tone.context.destination);

        //     source.connect(filter);
        //     source.buffer = buffer;

        //     let d = i * duration;
        //     let n = Tone.context.currentTime + d;
        //     source.start(
        //         n,
        //         this.currentSegments[0].duration * segmentToPlay.bufferStart,
        //         this.currentSegments[0].duration *
        //         (segmentToPlay.bufferLength / segmentToPlay.retrigger)
        //     );
        // }


    }

    trigger() {
        let n = Tone.context.currentTime + settings.latency;

        let bufferSource = Tone.context.createBufferSource();
        bufferSource.connect(Tone.context.destination);
        bufferSource.buffer = this.buffer;

        bufferSource.start(
            n,
            this.bufferStart * this.bufferDuration,
            this.bufferLength * this.bufferDuration
        )

        //this.buffer.stop (n + this.duration * this.bufferLength);
        // trigger the sourceBuffer
    }

}