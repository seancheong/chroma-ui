import { Args, Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

const meta = {
  title: 'Core/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    background: {
      control: 'radio',
      description: 'The background to be used for the loader',
    },
    size: {
      control: 'select',
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
  render: (args: Args) => {
    if (args.overlay) {
      return (
        <div style={{ position: 'relative', width: '100%', height: '200px' }}>
          <Loader {...args} />
        </div>
      );
    }

    return <Loader {...args} />;
  },
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

export const DarkBackground: Story = {
  ...Template,
  args: {
    background: 'dark',
  },
  parameters: {
    docs: {
      description: {
        story: 'The loader with dark background',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Size: Story = {
  render: (args: Args) => (
    <div style={{ display: 'flex', gap: '1em' }}>
      <div>
        <Loader />
      </div>
      <div>
        <Loader size="8" />
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
  ...Template,
  args: {
    overlay: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The loader with overlay, it will find the nearest parent with relative position, and display the loader on top of it',
      },
    },
  },
};
