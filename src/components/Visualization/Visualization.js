import React from 'react';

const Visualization = ({ arr }) => {
  const maximumTabWidth = window.innerWidth * 0.5 / 255;
  //console.log(maximumTabWidth);
  return (<div className='visualization'>
    <div className="visualization__tab" style={{ opacity: arr[2] / 400, width: maximumTabWidth * arr[2], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[3] / 400, width: maximumTabWidth * arr[3], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[4] / 400, width: maximumTabWidth * arr[4], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[5] / 400, width: maximumTabWidth * arr[5], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[6] / 400, width: maximumTabWidth * arr[6], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[7] / 400, width: maximumTabWidth * arr[7], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[8] / 400, width: maximumTabWidth * arr[8], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[9] / 400, width: maximumTabWidth * arr[9], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[10] / 400, width: maximumTabWidth * arr[10], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[12] / 400, width: maximumTabWidth * arr[12], }}></div>
  </div>



  )
}
export default Visualization;
