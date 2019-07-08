import { storiesOf } from '@storybook/vue';

import ujSampleEditor from './SampleEditor';

storiesOf('3. Molecules|uj-sample-editor', module)
    .add('uj-sample-editor', () => ({
        components: { ujSampleEditor },
        render(h) { return <uj-sample-editor></uj-sample-editor> }
    })
) 