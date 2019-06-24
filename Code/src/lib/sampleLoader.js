import Tone from 'tone';
import { Sample } from './models';

const availableSamples = [
    '/samples/amenbreak.wav', 
    '/samples/Ruffa Break 170.wav'];

let buffers = [];

let player;

export const sampleLoader = {
    availableSamples:availableSamples,
    load: function (index) {
        let s = new Sample("Ruffa");
        return s.load(availableSamples[index]).then((sample=>{
            player = new Tone.Player().toMaster();
            player._buffer = sample._buffer;
            return player;
        }))
    },

    trigger:function(){
        player.start();
    }
}