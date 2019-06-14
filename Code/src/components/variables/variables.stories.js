import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';

import ujButton from '../atoms/Button';

storiesOf('1.Variables|variables', module)
    .addDecorator(withNotes)
    .addParameters({ options: { panelPosition: 'bottom' } })
    .add('Theme Colors', () => ({
        components: { ujButton },
        render(h) {
            return <div>
                <ul>
                    <li>$dark: <span style="background-color:#1a0f24">#1a0f24;</span></li>
                    <li>$dark-grey: <span style="background-color:#4f4584">#4f4584;</span></li>
                    <li>$light-grey:<span style="background-color:#d5daf6">#d5daf6;</span></li>
                    <li>$light: <span style="background-color:#eae6d9">#eae6d9;</span></li>
                    <li>$accent: <span style="background-color:#9f2a55">#9f2a55;</span></li>
                    <li>$accent-lightest: <span style="background-color:#fd45cf">#fd45cf;</span></li>
                    <li>$danger: <span style="background-color:#FF4A4A">#FF4A4A;</span></li>
                    <li>$success: <span style="background-color:#27CC54">#27CC54;</span></li>
                </ul>
            </div>
        },
        methods: { action: action('clicked') },
    }), { notes: 'example notes on a button' }
    );