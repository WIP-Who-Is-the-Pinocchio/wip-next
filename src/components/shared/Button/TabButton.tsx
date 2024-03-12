'use client';

import { motion } from 'framer-motion';

import { Button } from '.';
import { cn } from '@/utils';

type ListType = {
  key: string;
  text: string;
};

interface SegmentedButtonProps {
  buttonList: ListType[];
  currentButton: string;
  layoutId: string;
  handleSelectButton: (value: string) => void;
  containerStyle?: string;
  buttonContainerStyle?: string;
  activeButtonStyle?: string;
  activeStyle?: string;
}

export const SegmentedButton = ({
  buttonList,
  currentButton,
  layoutId,
  handleSelectButton,
  containerStyle,
  buttonContainerStyle,
  activeButtonStyle,
  activeStyle,
}: SegmentedButtonProps) => {
  return (
    <ol className={cn('flex w-full', containerStyle)}>
      {buttonList.map((button, index) => {
        const isActive = buttonList[index].key === currentButton;
        return (
          <motion.li
            className={cn('flex-grow')}
            whileTap={isActive ? { scale: 0.95 } : { opacity: 0.6 }}
            key={`${button.key}-${index}`}
          >
            <Button
              onClick={() => handleSelectButton(button.key)}
              className={cn(
                'relative flex h-10 w-full rounded-[20px] bg-transparent font-normal text-black',
                buttonContainerStyle,
                isActive && activeButtonStyle
              )}
            >
              {isActive && (
                <motion.div
                  layoutId={layoutId}
                  className={cn(
                    'z-1 absolute bottom-0 left-0 right-0 top-[-1px] h-[calc(100%+2px)]',
                    activeStyle
                  )}
                />
              )}
              <span className="z-2 relative">{button.text}</span>
            </Button>
          </motion.li>
        );
      })}
    </ol>
  );
};
