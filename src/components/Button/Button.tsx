import React, { PropsWithChildren } from 'react';
import classnames from 'classnames';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
  fullwidth?: boolean;
}

export const Button: React.FC<PropsWithChildren<IProps>> = ({
  children = 'Okay',
  primary,
  secondary,
  danger,
  disabled,
  fullwidth,
  className,
  ...props
}) => {
  return (
    <button
      className={classnames(
        'text-base rounded-md py-2 px-4 min-w-[120px]',
        {
          'bg-gray-200 hover:bg-gray-300 active:bg-gray-400':
            !primary && !secondary && !danger,
        },
        {
          'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white':
            primary,
        },
        {
          'bg-[#343839] hover:bg-neutral-800 active:bg-neutral-900 text-white border border-[#808080]':
            secondary,
        },
        {
          'bg-red-500 hover:bg-red-600 active:bg-red-700 text-white': danger,
        },
        {
          'opacity-50 pointer-events-none': disabled,
        },
        {
          'w-full': fullwidth,
        },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
