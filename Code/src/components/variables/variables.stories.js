import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';

import ujButton from '../atoms/Button';

storiesOf('1.Variables|variables', module)
    .addDecorator(withNotes)
    .addParameters({ options: { panelPosition: 'bottom' } })
    .add('outline', () => ({
        components: { ujButton },
        render(h) { return <div>
            <h1>H1</h1>
        </div> },
        methods: { action: action('clicked') },
    }),{notes: 'example notes on a button' }
    );