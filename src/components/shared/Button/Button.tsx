import { ButtonHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';

export const ButtonVariants = cva(
  `
  flex justify-center items-center w-full h-[54px] rounded-button 
  text-base font-medium text-black
  `,
  {
    variants: {
      variant: {
        solid: 'bg-gray',
      },
      size: {
        default: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children?: React.ReactNode;
  disabled?: boolean;
  isShadow?: boolean;
  onClick: (value?: any) => void;
}

export const Button = ({
  children,
  variant,
  size,
  disabled,
  isShadow,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(className)} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
