export default {
  title: 'Components/SdsButton',
  tags: ['autodocs'],
  render: (args) => {
    const btn = document.createElement('sds-button');
    if (args.label) btn.setAttribute('label', args.label);
    if (args.variant) btn.setAttribute('variant', args.variant);
    if (args.size) btn.setAttribute('size', args.size);
    if (args.disabled) {
      btn.setAttribute('disabled', '');
    } else {
      btn.removeAttribute('disabled');
    }
    if (args.iconStart) {
      btn.setAttribute('icon-start', '');
    } else {
      btn.removeAttribute('icon-start');
    }
    if (args.iconEnd) {
      btn.setAttribute('icon-end', '');
    } else {
      btn.removeAttribute('icon-end');
    }
    return btn;
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'inline-radio',
      options: ['primary', 'neutral', 'subtle'],
    },
    size: {
      control: 'inline-radio',
      options: ['medium', 'small'],
    },
    disabled: { control: 'boolean' },
    iconStart: { name: 'Icon Start', control: 'boolean' },
    iconEnd: { name: 'Icon End', control: 'boolean' },
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
