import React from 'react';

function LinkHead({ title, onClick}) {
    return (
        <li className="linkTab" onClick={onClick}>
           {title}
        </li>
    )
}
export default LinkHead;
