import Tone from 'tone';
import { Sample } from './models';

const availableSamples = ['/samples/amenbreak.wav', '/samples/Ruffa Break 170.wav'];

let buffers = [];

let player;

export default {
    load: function (filename) {
        let s = new Sample("Ruffa");
        return s.load(filename || availableSamples[1]).then((sample=>{
            player = new Tone.Player().toMaster();
            player._buffer = sample._buffer;
            return player;
        }))
    },

    trigger:function(){
        player.start();
    }
}