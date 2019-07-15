import { storiesOf } from '@storybook/vue';

import ujFilterEditor from './FilterEditor';

storiesOf('4.Organisms|uj-filter-editor', module)
    .add('uj-filter-editor', () => ({
        components: { ujFilterEditor },
        render(h) { return <uj-filter-editor></uj-filter-editor> }
    })
)