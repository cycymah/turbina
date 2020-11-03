import React from 'react';

function LinkHead({ title, onClick }) {
  return (
    <li className="linkHead" onClick={onClick}>
      {title}
    </li>
  );
}
export default LinkHead;
