import React from 'react';
import { COLOR as color } from '../constants/color';

function LinkTab({ title, pos, url, isActive }) {
  const [shift, setShift] = React.useState(-60);
  const [isVisible, setIsVisible] = React.useState(0);

  React.useEffect(() => {
    if (isActive) {
      setShift(pos);
      setIsVisible(1);
    } else {
      setShift(-60);
      setIsVisible(0);
    }
  }, [isActive, pos]);

  const shiftTrans = `translateY(${shift}px)`;
  const cssRules = {
    opacity: isVisible,
    transform: shiftTrans,
    borderColor: color
  };

  return (
    <li className="droplinks__tab" style={cssRules}>
      <a className="droplinks__link" style={{ color }} href={url}>
        {title}
      </a>
    </li>
  );
}
export default LinkTab;
