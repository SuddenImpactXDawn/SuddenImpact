
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface WhiteSectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

const WhiteSection = ({ children, className, containerClassName }: WhiteSectionProps) => {
  return (
    <section className={cn("py-16", className)}>
      <div className={cn("container-custom", containerClassName)}>
        {children}
      </div>
    </section>
  );
};

export default WhiteSection;
