import { html } from 'lit';

export default {
  title: 'Components/SdsButtonGroup',
  tags: ['autodocs'],
  render: (args) => {
    // Render the custom element group containing SDS button children using declarative lit-html template syntax
    return html`
      <sds-button-group align=${args.align || 'start'}>
        <sds-button label="Button" variant="neutral"></sds-button>
        <sds-button label="Button" variant="primary"></sds-button>
      </sds-button-group>
    `;
  },
  argTypes: {
    align: {
      control: 'inline-radio',
      options: ['start', 'end', 'center', 'justify', 'stack'],
      description: 'The layout alignment of the button group',
      table: { category: 'Layout' },
    },
  },
};

export const Start = {
  args: {
    align: 'start',
  },
};

export const End = {
  args: {
    align: 'end',
  },
};

export const Center = {
  args: {
    align: 'center',
  },
};

export const Justify = {
  args: {
    align: 'justify',
  },
};

export const Stack = {
  args: {
    align: 'stack',
  },
};
