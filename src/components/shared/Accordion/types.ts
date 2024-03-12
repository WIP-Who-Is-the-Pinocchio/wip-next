import { ReactElement } from 'react';

export type AccordionProps = {
  defaultActiveItems?: string[];
  children: React.ReactNode | React.ReactNode[];
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type AccordionItemProps = {
  children:
    | React.ReactNode
    | ((props: { itemName: string }) => React.ReactNode);
  itemName: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type AccordionButtonProps = {
  itemName?: string;
  icon?: ReactElement;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type AccordionPanelProps = {
  itemName?: string;
  panelContainerStyle?: string;
} & React.HTMLAttributes<HTMLDivElement>;
