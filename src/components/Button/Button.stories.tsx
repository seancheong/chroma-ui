import type { Meta, StoryObj, Args } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Core/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      table: {
        defaultValue: {
          summary: 'Okay',
        },
      },
      description: 'The text to display inside the button',
    },
    primary: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    secondary: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    danger: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    fullwidth: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
  args: {
    children: 'Click Here',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args: Args) => <Button {...args} />,
};

export const Default: Story = {
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'A standard button',
      },
    },
  },
};

export const Primary: Story = {
  ...Template,
  args: {
    primary: true,
  },
};

export const Secondary: Story = {
  ...Template,
  args: {
    secondary: true,
  },
};

export const Danger: Story = {
  ...Template,
  args: {
    danger: true,
  },
};

export const Disabled: Story = {
  render: (args: Args) => (
    <div style={{ display: 'flex', gap: 10 }}>
      <Button {...args} />
      <Button primary {...args} />
      <Button secondary {...args} />
      <Button danger {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A disabled button will not respond to user interaction',
      },
    },
  },
  args: {
    disabled: true,
  },
};

export const Customize: Story = {
  ...Template,
  parameters: {
    docs: {
      description: {
        story:
          "The stylings can be customized by either passing tailwind css's class name or by passing the style object",
      },
    },
  },
  args: {
    children: 'Customize',
    className:
      'bg-green-500 hover:bg-green-600 active:bg-green-700 text-sm font-bold py-1 px-2 min-w-[100px]',
    style: { color: 'white' },
  },
};

export const FullWidth: Story = {
  ...Template,
  args: {
    fullwidth: true,
  },
};
