'use client';

import { useState, forwardRef } from 'react';

import AccordionContext from '@/contexts/AccordionContext';
import { cn } from '@/utils';
import { AccordionProps } from './types';

const Accordion = (props: AccordionProps, ref: React.Ref<HTMLDivElement>) => {
  const { defaultActiveItems = [], className, children, ...rest } = props;

  const [activeItems, setActiveItems] = useState<string[]>(defaultActiveItems);

  const handleSetActiveItems = (item: string) => {
    if (activeItems.includes(item)) {
      setActiveItems(activeItems.filter((activeItems) => activeItems !== item));
    } else {
      setActiveItems([...activeItems, item]);
    }
  };

  return (
    <AccordionContext.Provider
      value={{ activeItems, setActiveItems: handleSetActiveItems }}
    >
      <div className={cn('w-full', className)} {...rest} ref={ref}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const _Accordion = forwardRef(Accordion);
export { _Accordion as Accordion };
