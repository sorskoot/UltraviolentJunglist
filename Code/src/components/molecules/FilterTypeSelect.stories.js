import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';

import ujFilterTypeSelect from './FilterTypeSelect';

storiesOf('3.Molecules|uj-filter-type-select', module)
    .addDecorator(withInfo)
    .add('uj-filter-type-select', () => ({
        components: { ujFilterTypeSelect },
        render(h) { return <uj-filter-type-select></uj-filter-type-select> }
    }), {info:{}})
    .add('uj-filter-type-select with selection', () => ({
        components: { ujFilterTypeSelect },
        render(h) { return <uj-filter-type-select filter="lowpass"></uj-filter-type-select> }
    }), {info:{}})