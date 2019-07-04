import { storiesOf } from '@storybook/vue';
import { withKnobs, number } from '@storybook/addon-knobs';

import ujTrackBarEditor from './TrackBarEditor';

let items = new Array(16).fill(1);

storiesOf('4.Organisms|uj-track-bar-editor', module)
    .addDecorator(withKnobs)
    .add('uj-track-bar-editor', () => ({
        components: { ujTrackBarEditor },
        props: {
            current: {
              default: number('current', 2)
            }
          },
        render(h) { return <uj-track-bar-editor items={items} current={this.current}></uj-track-bar-editor> }
    })
)