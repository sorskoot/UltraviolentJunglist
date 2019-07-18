


export class Filter {

    static possibleFilters = [
        "allpass",
        "lowpass",
        "highpass",
        "bandpass",
        "lowshelf",
        "highshelf",
        "notch",
        "peaking"
    ];

    freq = 2000;
    Q = 0.5;
    _type = Filter.possibleFilters[0];

    get type() {
        return this._type;
    }

    set type(value) {
        if (!value || !~Filter.possibleFilters.indexOf(value)) {
            console.error('incorrect value for filter');
            return;
        }

        this._type = value;
    }


}