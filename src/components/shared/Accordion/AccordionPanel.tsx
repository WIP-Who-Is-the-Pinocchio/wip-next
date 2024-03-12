'use client';

import { useEffect, useRef, useState, forwardRef } from 'react';

import { useAccordionContext } from '@/contexts/AccordionContext';
import { cn } from '@/utils';
import { AccordionPanelProps } from './types';

const AccordionPanel = (
  props: AccordionPanelProps,
  ref: React.Ref<HTMLDivElement>
) => {
  const {
    itemName = '',
    className,
    style: userStyle,
    panelContainerStyle,
    children,
    ...rest
  } = props;
  const innerRef = useRef<HTMLDivElement>(null);
  const { activeItems } = useAccordionContext();
  const isActive = activeItems.includes(itemName);
  const [currentPanelHeight, setCurrentPanelHeight] = useState('0px');

  useEffect(() => {
    const handleResize = () => {
      if (!innerRef.current) return;
      setCurrentPanelHeight(`${innerRef.current.clientHeight}px`);
    };

    if (isActive) {
      handleResize();
      const observer = new MutationObserver(handleResize);
      observer.observe(innerRef.current as HTMLDivElement, {
        childList: true,
        subtree: true,
      });

      return () => observer.disconnect();
    } else {
      setCurrentPanelHeight('0px');
    }
  }, [isActive, activeItems]);

  return (
    <div
      {...rest}
      ref={ref}
      className={cn(
        'transition-height w-full overflow-hidden px-4 duration-300 ease-in-out',
        panelContainerStyle
      )}
      style={{ height: currentPanelHeight, ...userStyle }}
    >
      <div
        ref={innerRef}
        className={cn('pb-6', className)}
        data-name="panel-inner"
      >
        {children}
      </div>
    </div>
  );
};

export const _AccordionPanel = forwardRef(AccordionPanel);
export { _AccordionPanel as AccordionPanel };
