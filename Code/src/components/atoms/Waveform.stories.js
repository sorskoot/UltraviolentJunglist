import { storiesOf } from '@storybook/vue';

import soundFile from '../../../public/samples/Ruffa Break 170.wav';

import ujWaveform from './Waveform';
console.log(soundFile);
storiesOf('2.Atoms|uj-waveform', module)
    .add('Waveform', () => ({
        components: { ujWaveform },
        render(h) { return <uj-waveform ></uj-waveform> }
    })
);
