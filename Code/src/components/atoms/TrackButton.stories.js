import { storiesOf } from '@storybook/vue';
import ujTrackButton from './TrackButton.vue';

let groups = [1,3,5];

storiesOf('2.Atoms|uj-track-button', module)
    .add('Track Button', () => ({
        components: { ujTrackButton },
        render(h) { return <uj-track-button group={groups[0]}></uj-track-button> }
    }))

    .add('Track Button - current', () => ({
        components: { ujTrackButton },
        render(h) { return <uj-track-button current={true} group={groups[1]}></uj-track-button> }
    }))

    .add('Track Button - disabled', () => ({
        components: { ujTrackButton },
        render(h) { return <uj-track-button disabled={true} current={true} group={groups[2]}></uj-track-button> }
    }))