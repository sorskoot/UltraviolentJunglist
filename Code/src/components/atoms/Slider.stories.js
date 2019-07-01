import { storiesOf } from '@storybook/vue';

import ujSlider from './Slider';

const min=-10, max=10, step=2, value=0;

storiesOf('2.Atoms|uj-slider', module)
    .add('uj-slider', () => ({
        components: { ujSlider },
        render(h) { return <uj-slider min={min} max={max} step={step} value={value}></uj-slider> }
    })
)