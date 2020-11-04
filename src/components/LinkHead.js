import React from 'react';

function LinkHead({ title, onClick }) {
  const [isVisible, setIsVisible] = React.useState(0);

  React.useEffect(()=>{
    setIsVisible(1);
  },[])
  return (
    <li className="linkHead"  style={{opacity:isVisible}} onClick={onClick}>
      {title}
    </li>
  );
}
export default LinkHead;
