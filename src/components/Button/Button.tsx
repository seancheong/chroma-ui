import React, { PropsWithChildren } from 'react';
import classnames from 'classnames';
import { Loader } from '../Loader';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
  fullwidth?: boolean;
  loading?: boolean;
}

export const Button: React.FC<PropsWithChildren<IProps>> = ({
  children = 'Okay',
  primary = false,
  secondary = false,
  danger = false,
  disabled = false,
  fullwidth = false,
  loading = false,
  className,
  ...props
}) => {
  const isDefault = !primary && !secondary && !danger;

  return (
    <button
      className={classnames(
        'flex justify-center items-center text-base rounded-md py-2 px-4 min-w-[120px] min-h-[40px]',
        {
          'bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-900':
            isDefault,
        },
        {
          'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white':
            primary,
        },
        {
          'bg-neutral-800 hover:bg-neutral-900 active:bg-neutral-700 text-white':
            secondary,
        },
        {
          'bg-red-500 hover:bg-red-600 active:bg-red-700 text-white': danger,
        },
        {
          'opacity-70': disabled,
        },
        {
          'pointer-events-none': disabled || loading,
        },
        {
          'w-full': fullwidth,
        },
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Loader background={isDefault ? 'light' : 'dark'} />
      ) : (
        children
      )}
    </button>
  );
};
