import { configure, addDecorator, addParameters } from '@storybook/vue';
import { withBackgrounds } from '@storybook/addon-backgrounds';

import myTheme from './myTheme';
import './style.css';
import Vue from 'vue';

Vue.config.productionTip = true;

const req = require.context('../src/components', true, /.stories.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}
addParameters({
    options: {
        theme: myTheme,
    },
});

addDecorator(withBackgrounds([
    { name: 'dark', value: '#1a0f24', default: true }
]));

configure(loadStories, module);
