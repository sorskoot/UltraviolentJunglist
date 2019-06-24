import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import ujDropdown from './Dropdown.vue';

const list = ["test 1","test 2","test 3"];

storiesOf('2.Atoms|uj-dropdown', module)
    .add('description', () => ({
        components: { ujDropdown },
        render(h) { return <uj-dropdown select={action('select')} items={list}></uj-dropdown> },
    })
)