'use client';
import { cn } from '@/common/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from './MovingBorders';

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    // change md:grid-cols-3 to md:grid-cols-4, gap-4 to gap-10
    <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-10 p-10 md:grid-cols-4">
      {cards.map((card, i) => (
        <Button
          key={i}
          borderRadius="1.75rem"
          //   default is 2000
          duration={10000}
          //   add className={cn(card.className, "")}
          className={cn(
            card.className
            // "bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          )}
        >
          <div
            className={cn(
              card.className,
              'border-3 relative border-yellow-500'
            )}
          >
            <motion.div
              onClick={() => handleClick(card)}
              className={cn(
                card.className,
                'relative overflow-hidden',
                selected?.id === card.id
                  ? 'absolute inset-0 z-50 m-auto flex h-1/2 w-full cursor-pointer flex-col flex-wrap items-center justify-center rounded-lg md:w-1/2'
                  : lastSelected?.id === card.id
                    ? 'z-40 h-full w-full rounded-xl bg-white'
                    : 'h-full w-full rounded-xl bg-white'
              )}
              layout
            >
              {selected?.id === card.id && <SelectedCard selected={selected} />}
              <BlurImage card={card} />
            </motion.div>
          </div>
        </Button>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          'absolute left-0 top-0 z-10 h-full w-full bg-black opacity-0',
          selected?.id ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.thumbnail}
      //   change image scale 500 to 100
      height="100"
      width="100"
      onLoad={() => setLoaded(true)}
      className={cn(
        'absolute inset-0 h-full w-full object-cover object-top transition duration-200',
        loaded ? 'blur-none' : 'blur-md'
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="relative z-[60] flex h-full w-full flex-col justify-end rounded-lg bg-transparent shadow-2xl">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 z-10 h-full w-full bg-black opacity-60"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className="relative z-[70] px-8 pb-4"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
