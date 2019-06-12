import { configure, addDecorator, addParameters } from '@storybook/vue';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { themes } from '@storybook/theming';
import './style.css';
import Vue from 'vue';

Vue.config.productionTip = true;

const req = require.context('../src/components', true, /.stories.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}
addParameters({
    options: {
        theme: themes.dark,
    },
});

addDecorator(withBackgrounds([
    { name: 'dark', value: '#2B2B2B', default: true },
    { name: 'darkgrey', value: '#4A4A4A' },
    { name: 'light', value: '#FFFFFF' }
]));

configure(loadStories, module);
