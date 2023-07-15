import React, { forwardRef, useState } from 'react';
import classNames from 'classnames';
import { useRandomId } from '../../hooks/useRandomId';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string | React.ReactElement;
  checked?: boolean;
  disabled?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, IProps>(
  (
    { label, checked, disabled = false, onChange, className, ...props },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checked || false);

    const labelClassnames = 'ml-2 text-sm text-gray-900';
    const id = useRandomId('checkbox');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;

      if (checked === undefined) {
        setIsChecked(event.target.checked);
      }

      if (onChange) {
        onChange(event);
      }
    };

    return (
      <div
        className={classNames('flex items-center mb-4', {
          'opacity-70': disabled,
        })}
      >
        <input
          id={id}
          ref={ref}
          type="checkbox"
          checked={checked !== undefined ? checked : isChecked}
          disabled={disabled}
          onChange={handleChange}
          className={classNames(
            'w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-400',
            className
          )}
          {...props}
        />

        {typeof label === 'string' ? (
          <label htmlFor={id} className={labelClassnames}>
            {label}
          </label>
        ) : (
          React.cloneElement(label, {
            htmlFor: id,
            className: classNames(label.props.className, labelClassnames),
          })
        )}
      </div>
    );
  }
);
