import { forwardRef } from 'react';

import { cn } from '@/utils';
import { AccordionItemProps } from './types';

const AccordionItem = (
  props: AccordionItemProps,
  ref: React.Ref<HTMLDivElement>
) => {
  const { itemName, className, children, ...rest } = props;

  const renderChildren = () => {
    if (typeof children === 'function') {
      return children({ itemName });
    }
    return children;
  };

  return (
    <div className={cn('h-full', className)} {...rest} ref={ref}>
      {renderChildren()}
    </div>
  );
};

const _AccordionItem = forwardRef(AccordionItem);
export { _AccordionItem as AccordionItem };
