import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';

import ujButton from '../atoms/Button';

storiesOf('1.Variables|uj-button', module)
    .addDecorator(withNotes)
    .addParameters({ options: { panelPosition: 'top' } })
    .add('outline', () => ({
        components: { ujButton },
        render(h) { return <uj-button>Outline Button</uj-button> },
        methods: { action: action('clicked') },
    }),{notes: 'example notes on a button' }
    );