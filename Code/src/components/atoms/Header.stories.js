import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';

import ujHeader from './Header';

storiesOf('2.Atoms|uj-header', module)
    .add('Large Header', () => ({
        components: { ujHeader },
        render(h) { return <uj-header >A Large Header</uj-header> }
    })
);