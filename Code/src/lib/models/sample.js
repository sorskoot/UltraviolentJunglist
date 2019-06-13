import Tone from 'tone';

export class Sample{
    
    _buffer;
    _isLoaded = false;

    get isLoaded(){
        return this._isLoaded;
    }

    constructor(name, filename){
        this.name = name;
        this._buffer = new Tone.Buffer(filename);
        
    }

}