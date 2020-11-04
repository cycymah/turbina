import React from 'react';
import { COLOR as color } from '../constants/color';

function LinkHead({ title, onClick }) {
  const [isVisible, setIsVisible] = React.useState(0);

  React.useEffect(() => {
    setIsVisible(1);
  }, [])
  return (
    <li className="linkHead" style={{ opacity: isVisible, borderColor: color, color: color }} onClick={onClick}>
      {title}
    </li>
  );
}
export default LinkHead;
