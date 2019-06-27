import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import ujInput from './Input';

storiesOf('2.Atoms|uj-input', module)
    .add('Input', () => ({
        components: { ujInput },
        render(h) { return <uj-input change={action('change')}></uj-input> }
    })
)