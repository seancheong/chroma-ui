import { Args, Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Core/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'The input is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'The input showing loader inside',
    },
    error: {
      control: 'boolean',
      description: 'The input with error style',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'search'],
      description: 'The type of the input',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args: Args) => <Input placeholder="search..." {...args} />,
};

export const Default: Story = {
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'The default input',
      },
    },
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The disabled input',
      },
    },
  },
};

export const Loading: Story = {
  ...Template,
  args: {
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The input showing loader inside',
      },
    },
  },
};

export const Error: Story = {
  ...Template,
  args: {
    error: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The input with error style',
      },
    },
  },
};
