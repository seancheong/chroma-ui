import { render, screen } from '@testing-library/react';
import React from 'react';
import { Icon } from './Icon';

describe('Icon Component', () => {
  it('should render the icon with default props', () => {
    // given
    const icon = 'MagnifyingGlassIcon';

    // when
    render(<Icon name={icon} />);

    // then
    expect(screen.getByLabelText(icon)).toHaveClass('w-6 text-gray-900');
  });

  it('should render white icon if background prop is set to dark', () => {
    // given
    const icon = 'MagnifyingGlassIcon';
    const background = 'dark';

    // when
    render(<Icon name={icon} background={background} />);

    // then
    expect(screen.getByLabelText(icon)).toHaveClass('text-white');
  });

  it('should render the icon with custom size', () => {
    // given
    const icon = 'MagnifyingGlassIcon';
    const size = '6';

    // when
    render(<Icon name={icon} size={size} />);

    // then
    expect(screen.getByLabelText(icon)).toHaveClass(`w-${size}`);
  });

  it('should still render the icon with the same class and props if type prop is set to outline', () => {
    // given
    const icon = 'MagnifyingGlassIcon';
    const type = 'outline';
    const size = '6';

    // when
    render(<Icon name={icon} type={type} size={size} />);

    // then
    expect(screen.getByLabelText(icon)).toHaveClass(`w-${size} text-gray-900`);
  });
});
