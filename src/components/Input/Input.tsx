import classNames from 'classnames';
import React, { HTMLInputTypeAttribute, useState } from 'react';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  type?: HTMLInputTypeAttribute;
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
}

export const Input: React.FC<IProps> = ({
  placeholder,
  disabled = false,
  error = false,
  type = 'text',
  icon = null,
  iconPosition = 'left',
  className,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        className={classNames(
          'border border-gray-300 text-base text-gray-900 rounded-md outline-none block w-full px-4 py-2.5',
          {
            'opacity-50 border-gray-300/80': disabled,
          },
          {
            'pl-12': icon && iconPosition === 'left',
          },
          {
            'pr-12': icon && iconPosition === 'right',
          },
          {
            'focus:ring-blue-500 focus:border-blue-500 placeholder-gray-300 focus:placeholder-gray-400':
              !error,
          },
          {
            'border-red-500 placeholder-red-300 focus:placeholder-red-400':
              error,
          },
          className
        )}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        {...props}
      />

      {icon && (
        <div
          className={classNames(
            'absolute top-1/2 -translate-y-1/2',
            {
              'left-4': iconPosition === 'left',
            },
            {
              'right-4': iconPosition === 'right',
            },
            {
              'opacity-50': !isFocused,
            },
            {
              'opacity-100': isFocused,
            }
          )}
        >
          {icon}
        </div>
      )}
    </div>
  );
};
