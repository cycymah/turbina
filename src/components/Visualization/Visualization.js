import React from 'react';

const Visualization = ({ arr }) => {
  const maximumTabWidth = window.innerWidth * 0.5 / 255;
  //console.log(maximumTabWidth);
  return (<div className='visualization'>
    <div className="visualization__tab" style={{ opacity: arr[7] / 255, width: maximumTabWidth * arr[7], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[5] / 255, width: maximumTabWidth * arr[5], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[9] / 255, width: maximumTabWidth * arr[9], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[11] / 255, width: maximumTabWidth * arr[11], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[13] / 255, width: maximumTabWidth * arr[13], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[15] / 255, width: maximumTabWidth * arr[15], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[17] / 255, width: maximumTabWidth * arr[17], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[19] / 255, width: maximumTabWidth * arr[19], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[21] / 255, width: maximumTabWidth * arr[21], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[25] / 255, width: maximumTabWidth * arr[25], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[30] / 255, width: maximumTabWidth * arr[30], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[40] / 255, width: maximumTabWidth * arr[40], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[50] / 255, width: maximumTabWidth * arr[50], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[55] / 255, width: maximumTabWidth * arr[55], }}></div>
    <div className="visualization__tab" style={{ opacity: arr[60] / 255, width: maximumTabWidth * arr[60], }}></div>
  </div>



  )
}
export default Visualization;
