import { storiesOf } from '@storybook/vue';
import ujTrackButton from './TrackButton.vue';

storiesOf('2.Atoms|uj-track-button', module)
    .add('Track Button', () => ({
        components: { ujTrackButton },
        render(h) { return <uj-track-button group="1"></uj-track-button> }
    }))

    .add('Track Button - current', () => ({
        components: { ujTrackButton },
        render(h) { return <uj-track-button current="true" group="1"></uj-track-button> }
    }))