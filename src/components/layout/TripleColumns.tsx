import { ReactNode } from 'react';

export function LeftColumn({ children }: { children: ReactNode }) {
  return <div className='space-y-6'>{children}</div>;
}

export function CenterColumn({ children }: { children: ReactNode }) {
  return <div className='space-y-6'>{children}</div>;
}

export function RightColumn({ children }: { children: ReactNode }) {
  return <div className='space-y-6'>{children}</div>;
}
