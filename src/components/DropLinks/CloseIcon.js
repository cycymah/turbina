import React from "react"
import { COLOR as color } from '../../constants/color';


function CloseIcon(props) {
  return (
    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" {...props}>
      <path
        stroke={color}
        strokeWidth={2}
        d="M.707 1.192l9.9 9.9M10.607.707l-9.899 9.9"
      />
    </svg>
  )
}

export default CloseIcon;
