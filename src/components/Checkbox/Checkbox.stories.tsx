import { Args, Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Checkbox } from './Checkbox';
import { Button } from '../Button';

const meta = {
  title: 'Core/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'select',
      options: {
        string: 'String Label',
        'custom HTML element': <label>HTML Element Label</label>,
      },
      description:
        'The label of the checkbox, it can be a string or a HTML element',
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args: Args) => <Checkbox label="String Label" {...args} />,
  args: {
    label: 'String Label',
  },
};

export const Stadard: Story = {
  ...Template,
};

export const CustomHTMLLabel: Story = {
  ...Template,
  args: {
    label: <label style={{ color: '#2980b9' }}>Custom HTML Label</label>,
    onChange: (event) => console.log(event.target.checked),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Instead of a string, the label can be a HTML element. With this, you can customize the label as you want.',
      },
    },
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const ControlledCheckbox: Story = {
  render: (args: Args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isChecked, setIsChecked] = React.useState(args.checked);

    return (
      <div className="flex">
        <Button className="mr-4" onClick={() => setIsChecked(!isChecked)}>
          Toggle Checkbox
        </Button>
        <Checkbox label="Controlled" checked={isChecked} />
      </div>
    );
  },
  args: {
    label: 'Controlled',
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The checked state can be controlled by the parent component. In this case, the checkbox will not change its state internally.',
      },
      source: {
        code: `
  <div className="flex">
    <Button className="mr-4" onClick={() => setIsChecked(!isChecked)}>
      Toggle Checkbox
    </Button>
    <Checkbox label="Controlled Checkbox" checked={isChecked} />
  </div>
        `,
      },
    },
  },
};
