import {
  CreditCardIcon,
  DocumentDuplicateIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  TagIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import {
  CreditCardIcon as CreditCardOutlineIcon,
  DocumentDuplicateIcon as DocumentDuplicateOutlineIcon,
  MagnifyingGlassIcon as MagnifyingGlassOutlineIcon,
  ShoppingCartIcon as ShoppingCartOutlineIcon,
  TagIcon as TagOutlineIcon,
  UserIcon as UserOutlineIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import React from 'react';
import { Size, IconName } from '../models';

interface IProps extends React.SVGAttributes<SVGElement> {
  name: IconName;
  background?: 'light' | 'dark';
  size?: Size;
  type?: 'solid' | 'outline';
}

const iconMap = {
  CreditCardIcon,
  DocumentDuplicateIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  TagIcon,
  UserIcon,
};

const outlineIconMap = {
  CreditCardIcon: CreditCardOutlineIcon,
  DocumentDuplicateIcon: DocumentDuplicateOutlineIcon,
  MagnifyingGlassIcon: MagnifyingGlassOutlineIcon,
  ShoppingCartIcon: ShoppingCartOutlineIcon,
  TagIcon: TagOutlineIcon,
  UserIcon: UserOutlineIcon,
};

export const Icon: React.FC<IProps> = ({
  name,
  background = 'light',
  size = '6',
  type = 'solid',
  className,
  ...props
}) => {
  const IconTag = iconMap[name];
  const OutlineIconTag = outlineIconMap[name];
  const classes = classNames(
    `w-${size}`,
    { 'text-gray-900': background === 'light' },
    { 'text-white': background === 'dark' },
    className
  );

  return type === 'outline' ? (
    <OutlineIconTag aria-label={name} className={classes} {...props} />
  ) : (
    <IconTag aria-label={name} className={classes} {...props} />
  );
};
