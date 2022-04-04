import type { NextPage } from 'next';
import * as React from 'react';
import Dot from './dot';

type MinHeightType = `min-h-[${number}rem]`;

interface Props {
  RendererComponent: React.ComponentType<any>;
  items: any[];
  minHeight: MinHeightType;
}

const Slider: NextPage<Props> = ({ items, RendererComponent, minHeight }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const renderItems = () => {
    return items.map((item, index) => {
      return (
        <RendererComponent
          key={index}
          {...item}
          className={`absolute top-0 left-0 w-full`}
          showButton
          style={{
            transform: `translateX(${(index - activeIndex) * 100}%)`,
          }}
        />
      );
    });
  };

  const renderDots = () => {
    return items.map((_, index) => (
      <Dot
        key={index}
        active={activeIndex === index}
        onClick={() => handleDotClick(index)}
      />
    ));
  };

  return (
    <div className={`w-full relative overflow-hidden ${minHeight}`}>
      {renderItems()}
      <div className="absolute bottom-0 flex gap-2 left-1/2 -translate-x-1/2">
        {renderDots()}
      </div>
    </div>
  );
};

export default Slider;
