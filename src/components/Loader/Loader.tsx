import React, { PropsWithChildren } from 'react';
import classnames from 'classnames';
import { Color, Size } from '../models';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: Color;
  colorHexCode?: string;
  size?: Size;
  overlay?: boolean;
  text?: string;
}

export const Loader: React.FC<PropsWithChildren<IProps>> = ({
  color = 'black',
  colorHexCode,
  size = 8,
  overlay = false,
  text = 'Loading...',
  className,
}) => {
  return (
    <div
      aria-label="Loading"
      role="status"
      className={classnames({
        'absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 border-r-red-500':
          overlay,
      })}
    >
      <div
        data-testid="spinner"
        style={!!colorHexCode ? { borderRightColor: colorHexCode } : {}}
        className={classnames(
          'aspect-[1] rounded-full border-4 border-gray-200 animate-spin',
          `w-${size}`,
          { [`border-r-${color}`]: !colorHexCode && color === 'black' },
          { [`border-r-${color}-500`]: !colorHexCode && color !== 'black' },
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
