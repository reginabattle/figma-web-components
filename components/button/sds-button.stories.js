import { html } from 'lit';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (args) => {
    // Render the custom element using clean, declarative lit-html template syntax
    return html`
      <sds-button
        label=${args.label || ''}
        variant=${args.variant || 'primary'}
        size=${args.size || 'medium'}
        ?disabled=${args.disabled}
        ?icon-start=${args.iconStart}
        ?icon-end=${args.iconEnd}
        href=${args.href || ''}
        target=${args.target || '_self'}
        type=${args.type || 'submit'}
        @click=${args.onClick}
      ></sds-button>
    `;
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The text displayed inside the button',
      table: { category: 'Content' },
    },
    variant: {
      control: 'inline-radio',
      options: ['primary', 'neutral', 'subtle', 'danger', 'subtle-danger'],
      description: 'The visual style of the button',
      table: { category: 'Appearance' },
    },
    size: {
      control: 'inline-radio',
      options: ['medium', 'small'],
      description: 'The size of the button',
      table: { category: 'Appearance' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables user interactions and keyboard navigation',
      table: { category: 'State' },
    },
    iconStart: {
      name: 'Icon Start',
      control: 'boolean',
      description: 'Shows an icon at the beginning of the button',
      table: { category: 'Content' },
    },
    iconEnd: {
      name: 'Icon End',
      control: 'boolean',
      description: 'Shows an icon at the end of the button',
      table: { category: 'Content' },
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
    label: 'Primary Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    iconStart: false,
    iconEnd: false,
  },
};

export const Neutral = {
  args: {
    label: 'Neutral Button',
    variant: 'neutral',
    size: 'medium',
    disabled: false,
    iconStart: false,
    iconEnd: false,
  },
};

export const Subtle = {
  args: {
    label: 'Subtle Button',
    variant: 'subtle',
    size: 'medium',
    disabled: false,
    iconStart: false,
    iconEnd: false,
  },
};

export const WithIconStart = {
  args: {
    label: 'Icon Start',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    iconStart: true,
    iconEnd: false,
  },
};

export const WithIconEnd = {
  args: {
    label: 'Icon End',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    iconStart: false,
    iconEnd: true,
  },
};

export const Small = {
  args: {
    label: 'Small Button',
    variant: 'primary',
    size: 'small',
    disabled: false,
    iconStart: false,
    iconEnd: false,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    disabled: true,
    iconStart: false,
    iconEnd: false,
  },
};

export const Danger = {
  args: {
    label: 'Danger Button',
    variant: 'danger',
    size: 'medium',
    disabled: false,
    iconStart: false,
    iconEnd: false,
  },
};

export const SubtleDanger = {
  args: {
    label: 'Subtle Danger',
    variant: 'subtle-danger',
    size: 'medium',
    disabled: false,
    iconStart: false,
    iconEnd: false,
  },
};

