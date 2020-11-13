import React from 'react';
import LinkTab from './LinkTab';
import LinkHead from './LinkHead';
import LinkCloseButton from './LinkCloseButton';

import { LINK_TAB_DATA as linkTabData } from '../../constants/linkTabData';

function DropLinks({ isSongListOpen, windowsWidth }) {
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
  //Переписал фомулу для вычисления позиции при помощи switch-case (теперь более читабельно)
  //рассчет индивидуальных position для каждого <LinkTab/> дает "красивое выезжание "гармошкой",
  //а не целым блоком

  return (
    <ul
      className="droplinks"
      style={{
        filter: `${
          windowsWidth <= 490 && isSongListOpen ? 'blur(4px)' : 'blur(0)'
        }`,
      }}>
      {viewWidth < 500 &&
        (isOpened ? (
          <LinkCloseButton onClick={handleCloseMenu} />
        ) : (
          <LinkHead title="Стриминги" onClick={handleOpenMenu} />
        ))}

      {linkTabData.map((item, idx) => {
        let position = 0;
        switch (true) {
          case viewWidth >= 1100:
            position = idx * 43;
            break;
          case viewWidth < 1100 && viewWidth >= 500:
            position = idx * 41;
            break;
          case viewWidth < 500:
            position = idx * 35 + 30;
            break;
        }

        return (
          <LinkTab
            key={item.url}
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
