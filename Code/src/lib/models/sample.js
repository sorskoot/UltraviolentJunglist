import Tone from 'tone';

export class Sample {

    _buffer;
    _isLoaded = false;

    get isLoaded() {
        return this._isLoaded;
    }

    constructor(name) {
        this.name = name;
    }

    load(filename) {
        return new Promise((res, rej) => {
            try {
                let buffer = new Tone.Buffer(filename, () => {
                    this._buffer = buffer;
                    res(this);
                })
            } catch (e) {
                rej(e);
            }
        })

    }

}