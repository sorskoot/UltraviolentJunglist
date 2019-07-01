import { storiesOf } from '@storybook/vue';

import ujPropertySlider from './PropertySlider';

storiesOf('3.Molecules|uj-property-slider', module)
    .add('uj-property-slider', () => ({
        components: { ujPropertySlider },
        render(h) { return <uj-property-slider style="width:50%"></uj-property-slider> }
    })
)