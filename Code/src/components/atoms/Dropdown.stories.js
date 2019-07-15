import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';


import ujDropdown from './Dropdown.vue';

const list = ["test 1", "test 2", "test 3"];

storiesOf('2.Atoms|uj-dropdown', module)
    .addDecorator(withInfo)
    .add('uj-dropdown', () => ({
        components: { ujDropdown },
        render(h) { return <uj-dropdown select={action('select')} items={list}></uj-dropdown> },
    }), { info: { summary: 'Summary' } })
    .add('selected', () => ({
        components: { ujDropdown },
        render(h) { return <uj-dropdown selected={"test 2"} select={action('select')} items={list}></uj-dropdown> },
    }), { info: { summary: 'Summary' } })