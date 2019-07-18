import { transport, sampleLoader } from "@/lib";
import { Sample, Segment } from "./";

export class Track {

    buffer;
    duration;
    segments = [];

    items = [];

     /**
    * A pattern.
    * @constructor
    * @param {Number} length - The length of a pattern.
    * @param {Sample} sample - The sample played with the pattern.
    */
    constructor(length = 16) {
        this.items = [new Array(16).fill(0)];
    }
    
    initialize(){
        const dur = (transport.bpm / 60) * this.duration;
        let durationOptions = [
            { key: 4, value: Math.abs(4 - dur) },
            { key: 8, value: Math.abs(8 - dur) },
            { key: 16, value: Math.abs(16 - dur) },
            { key: 32, value: Math.abs(32 - dur) }
        ]
        let numberOfSegments = durationOptions.sort((a, b) => a.value - b.value)[0].key;

        this.segments = [...Array(numberOfSegments).keys()].map((key, i) => {
            let segment = new Segment(key);
            segment.createBuffer(this.buffer,i * (1 / numberOfSegments),1 / numberOfSegments );
            return segment;
        })
    }
    
    async loadSample(sampleIndex){
        let sample = await sampleLoader.load(sampleIndex);
        this.buffer = sample._buffer;
        this.duration = this.buffer.duration;
        
        this.initialize();

        return true;
    }

    trigger(segmentIndex){
        this.segments[segmentIndex].trigger();
    }

    triggerGroup(time){
        if (~this.items[0][time]) {
         let segmentToPlay = this.getRandomSegmentByGroup(
           this.items[0][time]
         );
         if (segmentToPlay) {
            segmentToPlay.trigger();
         }
       }
    }

    getRandomSegmentByGroup(group) {
        let segments = this.segments.filter(s => s.group == group);
        const newLocal = ~~(Math.random() * segments.length);
        return segments[newLocal];
      }
}