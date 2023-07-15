import { Args, Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { icons } from '../models';
import { Input } from './Input';
import { Icon } from '../Icon';
import { Loader } from '../Loader';
import { Button } from '../Button';

const meta = {
  title: 'Core/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'The input is disabled',
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
    icon: {
      control: 'select',
      options: icons.reduce(
        (acc, iconName) => {
          acc[iconName] = <Icon name={iconName} />;
          return acc;
        },
        { null: null, Loader: <Loader /> } as Record<string, JSX.Element | null>
      ),
      description: 'The icon to display inside the input',
    },
    iconPosition: {
      control: 'radio',
      description: 'The position of the icon',
    },
    value: {
      control: 'text',
      description: 'The controlled value of the input',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args: Args) => <Input {...args} />,
};

export const Stadard: Story = {
  ...Template,
  args: {
    placeholder: 'search...',
  },
  parameters: {
    docs: {
      description: {
        story: 'The standard input',
      },
    },
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    placeholder: 'search...',
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

export const Error: Story = {
  ...Template,
  args: {
    placeholder: 'search...',
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

export const WithIcon: Story = {
  ...Template,
  args: {
    placeholder: 'search...',
    icon: <Icon name="MagnifyingGlassIcon" />,
  },
  parameters: {
    docs: {
      description: {
        story: 'The input with icon, the icon is on the left by default',
      },
    },
  },
};

export const WithIconRight: Story = {
  ...Template,
  args: {
    placeholder: 'e.g. http://www.shorturl.com/1234567890',
    icon: <Icon name="DocumentDuplicateIcon" />,
    iconPosition: 'right',
  },
  parameters: {
    docs: {
      description: {
        story: 'The input with icon on the right',
      },
    },
  },
};

export const WithLoader: Story = {
  ...Template,
  args: {
    placeholder: 'search...',
    icon: <Loader />,
  },
  parameters: {
    docs: {
      description: {
        story: 'The input with loader as the icon',
      },
    },
  },
};

export const WithButton: Story = {
  render: (args: Args) => {
    return (
      <div className="flex">
        <Input
          className="rounded-r-none"
          placeholder="tag name"
          icon={<Icon name="TagIcon" />}
        />
        <Button className="rounded-l-none" primary>
          Add Tag
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'An example of input with button',
      },
    },
  },
};

export const ControlledInput: Story = {
  render: (args: Args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('');

    return (
      <div className="flex">
        <Button className="mr-4" onClick={() => setValue('test')}>
          Set Input
        </Button>

        <div className="w-[320px]">
          <Input
            className="rounded-r-none"
            placeholder="press the button to set the input value"
            value={value}
          />
        </div>
        <Button className="rounded-l-none" danger onClick={() => setValue('')}>
          Remove Input
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'The value of the input is controlled by the parent component. In this example, the value is set to "test" when the button is clicked.',
      },
      source: {
        code: `
  <div className="flex">
    <Button className="mr-4" onClick={() => setValue('test')}>
      Set Input to Test
    </Button>
    <Input
      className="rounded-r-none"
      placeholder="press the button to set the input value"
      value={value}
    />
    <Button className="rounded-l-none" danger onClick={() => setValue('')}>
      Remove Input
    </Button>
  </div>
        `,
      },
    },
  },
};
