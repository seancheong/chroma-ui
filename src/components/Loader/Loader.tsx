import React from 'react';
import classnames from 'classnames';
import { Size } from '../models';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: 'light' | 'dark';
  size?: Size;
  overlay?: boolean;
  text?: string;
}

export const Loader: React.FC<IProps> = ({
  background = 'light',
  size = 6,
  overlay = false,
  text = 'Loading...',
  className,
}) => {
  return (
    <div
      aria-label="Loading"
      role="status"
      className={classnames({
        'absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75':
          overlay,
      })}
    >
      <div
        data-testid="spinner"
        className={classnames(
          'aspect-[1] rounded-full border-2 animate-[spin_0.7s_linear_infinite]',
          { 'border-gray-300 border-r-black': background === 'light' },
          {
            'border-gray-500 border-r-white': background === 'dark' || overlay,
          },
          `w-${size}`,
          { 'm-2': overlay },
          className
        )}
      ></div>
      {overlay && (
        <span id="overlay-text" className="text-white font-light">
          {text}
        </span>
      )}
    </div>
  );
};
