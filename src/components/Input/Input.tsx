import classNames from 'classnames';
import React, { HTMLInputTypeAttribute } from 'react';
import { Loader } from '../Loader';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  loading?: boolean;
  disabled?: boolean;
  error?: boolean;
  type?: HTMLInputTypeAttribute;
}

export const Input: React.FC<IProps> = ({
  disabled = false,
  loading = false,
  error = false,
  type = 'text',
  className,
  ...props
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        disabled={disabled || loading}
        className={classNames(
          'border border-gray-300 text-base text-gray-900 rounded-md outline-none block w-full px-4 py-2.5',
          {
            'opacity-50 border-gray-300/80': disabled || loading,
          },
          {
            'pl-12': loading,
          },
          {
            'focus:ring-blue-400 focus:border-blue-400 placeholder-gray-300 focus:placeholder-gray-400':
              !error,
          },
          {
            'border-red-500 placeholder-red-300 focus:placeholder-red-400':
              error,
          },
          className
        )}
        {...props}
      />

      {loading && (
        <div className="absolute top-1/2 -translate-y-1/2 left-4">
          <Loader size="6" />
        </div>
      )}
    </div>
  );
};
