import { storiesOf } from '@storybook/vue';

import soundFile from '../../../public/samples/Ruffa Break 170.wav';

import { Segment } from "../../lib/models";
import ujWaveform from './Waveform';
import { sampleLoader } from '../../lib';

let currentSegment = new Segment();

storiesOf('2.Atoms|uj-waveform', module)
    .add('Waveform', () => ({
        components: { ujWaveform },
        render(h) {
            return <uj-waveform width="1200" height="300"
                current-segment={currentSegment}></uj-waveform>
        }
    })
);

