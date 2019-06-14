import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';

import ujButton from './Button';

storiesOf('2.Atoms|uj-button', module)
  .addDecorator(withNotes)
  .add('outline', () => ({
    components: { ujButton },
    render(h) { return<uj-button >Outline Button</uj-button> },
    methods: { action: action('clicked') },
  }),
  {notes: 'example notes on a button' })
  .add('outline disabled', () => ({
    components: { ujButton },
    render(h) { return<uj-button disabled>Outline Button</uj-button> }
  }))

  .add('primary', () => ({
    components: { ujButton },    
    render(h) { return <uj-button class="button-primary">Primary Button</uj-button> }
  }))
  .add('primary disabled', () => ({
    components: { ujButton },    
    render(h) { return <uj-button disabled class="button-primary">Primary Button</uj-button> }
  }))

  .add('success', () => ({
    components: { ujButton },    
    render(h) { return <uj-button class="button-success">Success Button</uj-button> }
  }))
  .add('success disabled', () => ({
    components: { ujButton },    
    render(h) { return <uj-button disabled class="button-success">Success Button</uj-button> }
  }))


  .add('danger', () => ({
    components: { ujButton },    
    render(h) { return <uj-button class="button-danger">Danger Button</uj-button> }
  }))
  .add('danger disabled', () => ({
    components: { ujButton },    
    render(h) { return <uj-button disabled class="button-danger">Danger Button</uj-button> }
  }))

  ;

