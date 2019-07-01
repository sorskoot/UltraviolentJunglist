import { storiesOf } from '@storybook/vue';

import ujLabel from './Label';

storiesOf('2.Atoms|uj-label', module)
    .add('uj-label', () => ({
        components: { ujLabel },
        render(h) { return <uj-label>Just a demo label</uj-label> }
    })
)