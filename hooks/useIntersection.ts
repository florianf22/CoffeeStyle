import * as React from 'react';

type RootMargin = `${number}px`;

const useIntersection = (
  element: React.RefObject<any>,
  rootMargin: RootMargin,
): boolean => {
  const [isVisible, setState] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin },
    );

    element.current && observer.observe(element.current);

    return () => observer.unobserve(element.current);
  }, [element, rootMargin]);

  return isVisible;
};

export default useIntersection;
