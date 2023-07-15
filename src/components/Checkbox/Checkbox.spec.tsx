import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Checkbox } from './Checkbox';

describe('Checkbox Component', () => {
  it('should render the label if passed in label props is string', () => {
    // given
    const labelText = 'string label';

    // when
    render(<Checkbox label={labelText} />);

    // then
    expect(screen.getByText(labelText)).toBeInTheDocument();
  });

  it('should render the label if passed in label props is HTML element', () => {
    // given
    const labelText = 'element label';
    const labelElement = <span>{labelText}</span>;

    // when
    render(<Checkbox label={labelElement} />);

    // then
    expect(screen.getByText(labelText)).toBeInTheDocument();
  });

  it('should toggle the checked state when the checkbox is clicked', async () => {
    // when
    render(<Checkbox label="Checkbox label" />);
    const checkbox = screen.getByRole('checkbox');

    // then
    expect(checkbox).not.toBeChecked();
    await waitFor(async () => {
      await userEvent.click(checkbox);
    });
    expect(checkbox).toBeChecked();
  });

  it('should trigger the onChange callback when the checkbox is clicked', async () => {
    // given
    const onChange = jest.fn();

    // when
    render(<Checkbox label="Checkbox label" onChange={onChange} />);
    const checkbox = screen.getByRole('checkbox');

    await waitFor(async () => {
      await userEvent.click(checkbox);
    });

    // then
    expect(onChange).toHaveBeenCalled();
  });

  it('should set the checked state to the value of the checked prop', () => {
    // given
    const checked = true;

    // when
    render(<Checkbox label="Checkbox label" checked={checked} />);
    const checkbox = screen.getByRole('checkbox');

    // then
    expect(checkbox).toBeChecked();
  });

  it('should not allow user to toggle the checkbox if disabled prop is passed', async () => {
    // when
    render(<Checkbox label="Checkbox label" disabled />);
    const checkbox = screen.getByRole('checkbox');

    userEvent.click(checkbox);

    // then
    expect(checkbox).not.toBeChecked();
  });
});
