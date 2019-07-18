import Tone from 'tone';
import { Sample } from './models';

const availableSamples = [
    '/samples/amenbreak.wav',
    "/samples/Assasin Break 168.wav",
    "/samples/Attake Break 170.wav",
    "/samples/Bibop Break 160.wav",
    "/samples/Combo 11.wav",
    "/samples/Creek Break 160.wav",
    "/samples/Crot Break 165.wav",
    "/samples/DubMelody01.wav",
    "/samples/DubMelody02.wav",
    "/samples/DubMelody03.wav",
    "/samples/DubMelody04.wav",
    "/samples/Dubstep01.wav",
    "/samples/Dubstep02.wav",
    "/samples/DubstepDrums.wav",
    "/samples/Fringe Break 170.wav",
    "/samples/Grid Break 170.wav",
    "/samples/Hydro Break 170.wav",
    "/samples/Hype Break 170.wav",
    "/samples/Karate Break 170.wav",
    "/samples/Orb Break 170.wav",
    "/samples/piano.wav",
    "/samples/Promo Break 168.wav",
    "/samples/Riddim Break 168.wav",
    "/samples/Ruffa Break 170.wav",
    "/samples/Rust Break 170.wav",
    "/samples/Samurai Break 170.wav",
    "/samples/Snap Break 165.wav",
    "/samples/Stick Break 170.wav",
    "/samples/Tube Break 170.wav",
    "/samples/Wazo Break 170.wav"];

let buffers = [];

export const sampleLoader = {
    availableSamples: availableSamples,
    load: function (index) {
        let s = new Sample("Ruffa");
        return s.load(index).then((sample => {
            // let player = new Tone.Player();
            // player._buffer = sample._buffer;
            return sample.buffer;
        }))
    }
}