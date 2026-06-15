import { html } from 'lit';

export default {
  title: 'Components/SdsIconButton',
  tags: ['autodocs'],
  render: (args) => {
    // Render the custom element using clean, declarative lit-html template syntax
    return html`
      <sds-icon-button
        variant=${args.variant || 'primary'}
        size=${args.size || 'medium'}
        ?disabled=${args.disabled}
        href=${args.href || ''}
        target=${args.target || '_self'}
        type=${args.type || 'submit'}
        @click=${args.onClick}
      ></sds-icon-button>
    `;
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'neutral', 'subtle'],
      description: 'The visual style of the icon button',
      table: { category: 'Appearance' },
    },
    size: {
      control: 'inline-radio',
      options: ['medium', 'small'],
      description: 'The size of the icon button',
      table: { category: 'Appearance' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables user interactions and keyboard navigation',
      table: { category: 'State' },
    },
    href: {
      control: 'text',
      description: 'The URL the link button navigates to',
      table: { category: 'Navigation' },
    },
    target: {
      control: 'inline-radio',
      options: ['_self', '_blank'],
      description: 'Where to open the linked document',
      table: { category: 'Navigation' },
    },
    type: {
      control: 'inline-radio',
      options: ['submit', 'button', 'reset'],
      description: 'The standard HTML button type',
      table: { category: 'Behavior' },
    },
    onClick: {
      action: 'click',
      table: { disable: true },
    },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
};

export const Neutral = {
  args: {
    variant: 'neutral',
    size: 'medium',
    disabled: false,
  },
};

export const Subtle = {
  args: {
    variant: 'subtle',
    size: 'medium',
    disabled: false,
  },
};

export const Small = {
  args: {
    variant: 'primary',
    size: 'small',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
};
