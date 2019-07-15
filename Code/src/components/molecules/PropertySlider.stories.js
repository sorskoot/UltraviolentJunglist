import { storiesOf } from '@storybook/vue';

import ujPropertySlider from './PropertySlider';

storiesOf('3.Molecules|uj-property-slider', module)
    .add('uj-property-slider', () => ({
        components: { ujPropertySlider },
        render(h) { return <uj-property-slider style="width:50%" 
        label="retrigger"
        value="6"
        min="1"
        max="16"></uj-property-slider> }
    })
)