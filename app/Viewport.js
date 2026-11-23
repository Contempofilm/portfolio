'use client';
import { useEffect, useState } from 'react';

// Small live readout of the window size, shown top-left.
export default function Viewport() {
  const [size, setSize] = useState('');
  useEffect(() => {
    const update = () => setSize(`${window.innerWidth}px × ${window.innerHeight}px`);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return <span>{size}</span>;
}
