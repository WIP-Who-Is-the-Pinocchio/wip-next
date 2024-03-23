'use client';

import { createContext, useContext } from 'react';

export type AccordionContextType = {
  activeItems: string[];
  setActiveItems: (item: string) => void;
};

export const AccordionContext = createContext<AccordionContextType>({
  activeItems: [],
  setActiveItems: () => {},
});

export const useAccordionContext = () => useContext(AccordionContext);

export default AccordionContext;
