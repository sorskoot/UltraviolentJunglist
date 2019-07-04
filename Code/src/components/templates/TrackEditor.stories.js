import { storiesOf } from '@storybook/vue';

import ujTrackEditor from './TrackEditor';

const track = {
    items:[
        new Array(16).fill(1)
    ]
}

storiesOf('5. Templates|uj-track-editor', module)
    .add('uj-track-editor', () => ({
        components: { ujTrackEditor },
        render(h) { return <uj-track-editor track={track} current={1}></uj-track-editor> }
    })
)