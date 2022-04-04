import type { NextPage } from 'next';
import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  selector: string;
}

const ClientPortal: NextPage<Props> = ({ children, selector }) => {
  const ref = useRef<Element>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // @ts-ignore
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  // @ts-ignore
  return mounted ? createPortal(children, ref.current) : null;
};

export default ClientPortal;
