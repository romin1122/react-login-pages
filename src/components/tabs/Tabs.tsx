import { ReactNode, useState } from 'react';

type Item = { name: string; component: ReactNode };

type TabsProps = {
  wrapperClass?: string;
  itemClass?: string;
  items: Item[];
};

function Tabs({ wrapperClass, itemClass, items }: TabsProps) {
  const [currentComp, setCurrentComp] = useState<ReactNode>(null);
  return (
    <div className={wrapperClass}>
      <div>
        {items.map((each) => (
          <div
            className={itemClass}
            onClick={() => setCurrentComp(each.component)}
          >
            {each.name}
          </div>
        ))}
      </div>
      {currentComp}
    </div>
  );
}

export default Tabs;
