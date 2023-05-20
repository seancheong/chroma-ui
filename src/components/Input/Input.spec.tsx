import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Input } from './Input';
import { Loader } from '../Loader';
import { Icon } from '../Icon';

describe('Input Component', () => {
  it('should render the input with default props', () => {
    // given
    const placeholder = 'search...';

    // when
    render(<Input placeholder={placeholder} />);

    // then
    expect(screen.getByRole('textbox')).toHaveClass(
      'focus:ring-blue-500 focus:border-blue-500 placeholder-gray-300 focus:placeholder-gray-400'
    );
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'placeholder',
      placeholder
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
  });

  it('should render the input with disabled state if disabled prop is passed', () => {
    // when
    render(<Input disabled />);

    // then
    expect(screen.getByRole('textbox')).toHaveClass(
      'opacity-50 border-gray-300/80'
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('disabled');
  });

  it('should not allow user to type if disabled prop is passed', async () => {
    // given
    const testString = 'test';

    // when
    render(<Input disabled />);
    const input = screen.getByRole('textbox');

    await waitFor(async () => {
      await userEvent.type(input, testString);
    });

    // then
    expect(input).toHaveValue('');
  });

  it('should allow user to type if disabled prop is not passed', async () => {
    // given
    const testString = 'test';

    // when
    render(<Input />);
    const input = screen.getByRole('textbox');

    await waitFor(async () => {
      await userEvent.type(input, testString);
      await fireEvent.blur(input);
    });

    // then
    expect(input).toHaveValue(testString);
  });

  it('should render the input with icon if icon prop is passed', () => {
    // given
    const iconName = 'MagnifyingGlassIcon';
    const icon = <Icon name={iconName} />;

    // when
    render(<Input icon={icon} />);

    // then
    expect(screen.getByLabelText(iconName)).toBeInTheDocument();
  });

  it('should render the input with loader if loader is passed in through icon prop', () => {
    // given
    const loader = <Loader />;

    // when
    render(<Input icon={loader} />);

    // then
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should render the input with error state if error prop is passed', () => {
    // when
    render(<Input error />);

    // then
    expect(screen.getByRole('textbox')).toHaveClass(
      'border-red-500 placeholder-red-300 focus:placeholder-red-400'
    );
  });
});
