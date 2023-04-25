import { render, screen } from '@testing-library/react';
import { Button } from './Button';

const PRIMARY_CLASS = 'bg-blue-500';
const SECONDARY_CLASS = 'bg-[#343839]';
const DANGER_CLASS = 'bg-red-500';

describe('Button Component', () => {
  it('should render the button with basic style', () => {
    // given
    const buttonText = 'Click me';

    // when
    render(<Button>{buttonText}</Button>);

    // then
    expect(screen.getByRole('button')).toHaveTextContent(buttonText);
    expect(screen.getByRole('button')).not.toHaveClass(PRIMARY_CLASS);
    expect(screen.getByRole('button')).not.toHaveClass(SECONDARY_CLASS);
    expect(screen.getByRole('button')).not.toHaveClass(DANGER_CLASS);
    expect(screen.getByRole('button')).not.toHaveClass('w-full');
  });

  it('should render the button with the primary style', () => {
    // when
    render(<Button primary>Click me</Button>);

    // then
    expect(screen.getByRole('button')).toHaveClass(PRIMARY_CLASS);
  });

  it('should render the button with the secondary style', () => {
    // when
    render(<Button secondary>Click me</Button>);

    // then
    expect(screen.getByRole('button')).toHaveClass(SECONDARY_CLASS);
  });

  it('should render the button with the danger style', () => {
    // when
    render(<Button danger>Click me</Button>);

    // then
    expect(screen.getByRole('button')).toHaveClass(DANGER_CLASS);
  });

  it('should disable button click if it is disabled', () => {
    // when
    render(<Button disabled>Click me</Button>);

    // then
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should not disable button click if it is not disabled', () => {
    // when
    render(<Button>Click me</Button>);

    // then
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  it('should render the button with full width', () => {
    // when
    render(<Button fullwidth>Click me</Button>);

    // then
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });
});
