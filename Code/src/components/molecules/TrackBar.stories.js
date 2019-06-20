import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import ujTrackBar from './TrackBar.vue';

let items = new Array(16).fill(1);

storiesOf('3. Molecules|uj-track-bar', module)
    .addDecorator(withKnobs)
    .add('Track Bar', () => ({
        components: { ujTrackBar },
        props: {
            current: {
              default: number('current', 2)
            }
          },
        render(h) { return <uj-track-bar items={items} current={this.current}></uj-track-bar> }
    })
)