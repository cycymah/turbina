import React from 'react';
import { COLOR as color } from '../constants/color';

function LinkHead({ title, onClick }) {
  const [isVisible, setIsVisible] = React.useState(0);
  //Здесь компонент монтируется невидимым, а потом включается, т.к. его задача -
  //появиться плавно, по мере того, как кнопки уплывают вверх.
  React.useEffect(() => {
    setIsVisible(1);
  }, [])
  return (
    <li className="droplinks__title"
      style={{ opacity: isVisible, borderColor: color, color: color }}
      onClick={onClick}>
      {title}
    </li>
  );
}
export default LinkHead;
