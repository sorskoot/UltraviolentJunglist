import { storiesOf } from '@storybook/vue';

import ujSlider from './Slider';

storiesOf('2.Atoms|uj-slider', module)
    .add('uj-slider', () => ({
        components: { ujSlider },
        render(h) { return <uj-slider></uj-slider> }
    })
)