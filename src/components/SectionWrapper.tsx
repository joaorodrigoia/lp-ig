import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function SectionWrapper({
  id,
  children,
  className,
  containerClassName,
}: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('relative py-14 md:py-24', className)}
    >
      <div className={cn('mx-auto max-w-6xl px-5 md:px-8', containerClassName)}>
        {children}
      </div>
    </motion.section>
  );
}
