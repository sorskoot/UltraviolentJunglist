import Tone from 'tone';

class Sampler {
    
    constructor() {
        this.internalRootPlayer = [];
    }

    load() {

        return new Promise(complete => {
            // let filename = value;
            let pl = new Tone.Player();//{ "url": `./audio/amenbreak.wav` });
            pl.load(`./audio/amenbreak.wav`).then(e => {
                complete(e);
            });

            //    pl.name = filename;
            //   this.names.push(filename);
            this.internalRootPlayer.push(pl);
            // index++;
        });
    }

}

export let sampler = new Sampler();