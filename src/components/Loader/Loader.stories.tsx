import { Args, Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

const meta = {
  title: 'Core/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      description: 'The color of the loader',
    },
    colorHexCode: {
      control: 'text',
      description:
        'The color of the loader in hex code, e.g. #000000. It will override the color prop',
    },
    size: {
      control: 'number',
      description:
        'The size of the loader, it uses the width class of TailwindCSS, e.g. 8 is w-8',
    },
    overlay: {
      control: 'boolean',
      description: 'The loader with overlay',
    },
    text: {
      control: 'text',
      description:
        'The text to display inside the loader, it will only work if overlay is true. If you don\'t want to display the text, just pass an empty string ""',
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args: Args) => <Loader {...args} />,
};

export const Default: Story = {
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'The default loader',
      },
    },
  },
};

export const Colors: Story = {
  render: (args: Args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Loader color="red" />
      <Loader color="orange" />
      <Loader color="yellow" />
      <Loader color="green" />
      <Loader color="teal" />
      <Loader color="blue" />
      <Loader color="violet" />
      <Loader color="purple" />
      <Loader color="pink" />
      <Loader color="gray" />
      <Loader color="black" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The loader with different colors',
      },
    },
  },
};

export const CustomColorWithColorHexCode: Story = {
  ...Template,
  parameters: {
    docs: {
      description: {
        story:
          'The loader with custom color using hex code, it will override the color prop',
      },
    },
  },
  args: {
    colorHexCode: '#1abc9c',
  },
};

export const Size: Story = {
  render: (args: Args) => (
    <div style={{ display: 'flex', gap: '1em' }}>
      <div>
        <Loader size="6" />
      </div>
      <div>
        <Loader />
      </div>
      <div>
        <Loader size="12" />
      </div>
      <div>
        <Loader size="16" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The loader with different sizes',
      },
    },
  },
};

export const Overlay: Story = {
  render: (args: Args) => (
    <div style={{ position: 'relative', width: '100%', height: '300px' }}>
      <Loader overlay {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The loader with overlay, it will find the nearest parent with relative position, and display the loader on top of it',
      },
    },
  },
};
