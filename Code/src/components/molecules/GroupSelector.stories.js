import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import ujGroupSelector from './GroupSelector';

storiesOf('3.Molecules|uj-group-selector', module)
    .addDecorator(withKnobs)
    .add('group selector', () => ({
        components: { ujGroupSelector },
        props: {
            current: {
              default: number('current', 2)
            }
          },
        render(h) { return <uj-group-selector selected={this.current}></uj-group-selector> }
    })
)