import React from 'react';
import LinkTab from './LinkTab';
import LinkHead from './LinkHead';
import LinkCloseButton from './LinkCloseButton';

import { LINK_TAB_DATA as linkTabData } from '../constants/linkTabData';

function DropLinks() {
  const [isOpened, setIsOpened] = React.useState(false);
  const [viewWidth, setViewWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    if (viewWidth > 500) {
      setIsOpened(true);
    }
    window.addEventListener('resize', () => {
      setViewWidth(window.innerWidth);
      if (window.innerWidth > 500) {
        setIsOpened(true);
      }
    });
  }, []);

  const handleOpenMenu = () => {
    setIsOpened(true);
  };
  const handleCloseMenu = () => {
    setIsOpened(false);
  };

  return (
    <ul className="dropLinks">
      {viewWidth < 500 &&
        (isOpened ? (
          <LinkCloseButton onClick={handleCloseMenu}/>
        ) : (
          <LinkHead title="Стриминги" onClick={handleOpenMenu} />
        ))}

      {linkTabData.map((item, idx) => {
        const position = viewWidth < 500 ? idx * 35 + 30 : 50 * idx;
        return (
          <LinkTab
            key={idx}
            title={item.title}
            pos={position}
            url={item.url}
            isActive={isOpened}
          />
        );
      })}
    </ul>
  );
}
export default DropLinks;
