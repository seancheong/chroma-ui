import { render, screen } from '@testing-library/react';
import React from 'react';
import { Loader } from './Loader';

describe('Loader Component', () => {
  it('should render the loader with default props', () => {
    // when
    render(<Loader />);

    // then
    expect(screen.getByTestId('spinner')).toHaveClass(
      'border-gray-300 border-r-black w-6'
    );
  });

  it('should render different color if background prop is passed', () => {
    // given
    const background = 'dark';

    // when
    render(<Loader background={background} />);

    // then
    expect(screen.getByTestId('spinner')).toHaveClass(
      `border-gray-500 border-r-white`
    );
  });

  it('should render the loader with custom size', () => {
    // given
    const size = '6';

    // when
    render(<Loader size={size} />);

    // then
    expect(screen.getByTestId('spinner')).toHaveClass(`w-${size}`);
  });

  it('should render the overlay with default text if overlay prop is passed', () => {
    // when
    render(<Loader overlay />);

    // then
    expect(screen.getByRole('status')).toHaveClass('bg-black');
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render the overlay with custom text if text prop is passed together with overlay prop', () => {
    // given
    const text = 'Please wait...';

    // when
    render(<Loader overlay text={text} />);

    // then
    expect(screen.getByRole('status')).toHaveClass('bg-black');
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should ignore the text prop if nothing is passed to the overlay prop', () => {
    // given
    const text = 'Please wait...';

    // when
    render(<Loader text={text} />);

    // then
    expect(screen.queryByText(text)).not.toBeInTheDocument();
  });
});
