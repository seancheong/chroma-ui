import { Args, Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta = {
  title: 'Core/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The Icon component that powered by HeroIcons https://heroicons.com/\n\nNot every icon from HeroIcons is available here, only those that are being used by other components are available. Please refer to the list of icons below.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'select',
      description:
        'The name of the icons that available from HeroIcons, please refer to the list of icons below',
    },
    background: {
      control: 'radio',
      description:
        'The icon color will be changed based on what background that the icon is on',
    },
    size: {
      control: 'select',
      description:
        'The size of the icon, it uses the width class of TailwindCSS, e.g. 8 is w-8',
    },
    type: {
      control: 'radio',
      description: 'The type of the icon, solid or outline',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args: Args) => <Icon name="MagnifyingGlassIcon" {...args} />,
  args: {
    name: 'MagnifyingGlassIcon',
  },
};

export const Default: Story = {
  ...Template,
};

export const Solid: Story = {
  ...Template,
  args: {
    name: 'ShoppingCartIcon',
    type: 'solid',
  },
  parameters: {
    docs: {
      description: {
        story: 'The solid type icon',
      },
    },
  },
};

export const Outline: Story = {
  ...Template,
  args: {
    name: 'ShoppingCartIcon',
    type: 'outline',
  },
  parameters: {
    docs: {
      description: {
        story: 'The outline type icon',
      },
    },
  },
};

export const Background: Story = {
  ...Template,
  args: {
    name: 'CreditCardIcon',
    type: 'outline',
    background: 'dark',
  },
  parameters: {
    docs: {
      description: {
        story: 'The icon that suitable for dark background',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Size: Story = {
  render: (args: Args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Icon name="CreditCardIcon" {...args} />
      <Icon name="CreditCardIcon" size="8" {...args} />
      <Icon name="CreditCardIcon" size="12" {...args} />
      <Icon name="CreditCardIcon" size="16" {...args} />
    </div>
  ),
  args: {
    name: 'CreditCardIcon',
    type: 'outline',
  },
  parameters: {
    docs: {
      description: {
        story: 'The icon with different sizes',
      },
    },
  },
};

export const Customize: Story = {
  ...Template,
  args: {
    name: 'TagIcon',
    className: '!text-teal-500',
    style: { width: '3em' },
  },
  parameters: {
    docs: {
      description: {
        story:
          "The stylings can be customized by either passing tailwind css's class name or by passing the style object",
      },
    },
  },
};
