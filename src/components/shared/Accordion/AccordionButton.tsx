import { forwardRef, useCallback } from 'react';

import { useAccordionContext } from '@/contexts/AccordionContext';
import { useButton } from '@/hooks';
import { cn } from '@/utils';
import { AccordionButtonProps } from './types';

const AccordionButton = (
  props: AccordionButtonProps,
  ref: React.Ref<HTMLButtonElement>
) => {
  const {
    itemName = '',
    icon = null,
    className,
    onClick,
    children,
    ...rest
  } = props;

  const { activeItems, setActiveItems } = useAccordionContext();

  const isActive = activeItems.includes(itemName);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setActiveItems(itemName);
      onClick?.(event);
    },
    [itemName, setActiveItems]
  );

  const { buttonProps } = useButton({
    ...rest,
    onClick: handleClick,
    elementType: 'button',
  });

  return (
    <button
      className={cn(
        'flex w-full items-center justify-between border-none px-4 py-3',
        className
      )}
      {...buttonProps}
      ref={ref}
    >
      {children}
      {icon && (
        <div
          className={`inline-block transition-transform duration-300 ease-in-out ${
            isActive ? 'rotate-180' : 'rotate-0'
          }`}
        >
          {icon}
        </div>
      )}
    </button>
  );
};

const _AccordionButton = forwardRef(AccordionButton);
export { _AccordionButton as AccordionButton };
