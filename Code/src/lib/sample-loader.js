import Tone from 'tone';
import { Sample } from './models';

const availableSamples = ['/samples/amenbreak.wav', '/samples/Ruffa Break 170.wav'];

let buffers = [];

let player;

export default {
    load: function () {
        let s = new Sample("Ruffa", '/samples/Ruffa Break 170.wav');
        player = new Tone.Player().toMaster();
        player._buffer = s._buffer;
    },
    trigger:function(){
        player.start();
    }
}