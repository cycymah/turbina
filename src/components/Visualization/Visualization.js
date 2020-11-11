import React from 'react';

const Visualization = ({ arr }) => {
  console.log(arr);
  return (<div className='visualization'>
    <div className="visualization__tab" style={{ width: 4 * arr[7], height: 20, backgroundColor: '#990' }}></div>
    <div className="visualization__tab" style={{ width: 4 * arr[5], height: 20, backgroundColor: '#289' }}></div>
    <div className="visualization__tab" style={{ width: 4 * arr[9], height: 20, backgroundColor: '#950' }}></div>
    <div className="visualization__tab" style={{ width: 4 * arr[11], height: 20, backgroundColor: '#940' }}></div>
    <div className="visualization__tab" style={{ width: 4 * arr[13], height: 20, backgroundColor: '#790' }}></div>
    <div className="visualization__tab" style={{ width: 4 * arr[15], height: 20, backgroundColor: '#399' }}></div>
    <div className="visualization__tab" style={{ width: 4 * arr[17], height: 20, backgroundColor: '#599' }}></div>
    <div className="visualization__tab" style={{ width: 4 * arr[19], height: 20, backgroundColor: '#699' }}></div>
    <div className="visualization__tab" style={{ width: 4 * arr[21], height: 20, backgroundColor: '#799' }}></div>
    <div className="visualization__tab" style={{ width: 4 * arr[25], height: 20, backgroundColor: '#999' }}></div>
    <div className="visualization__tab" style={{ width: 4 * arr[30], height: 20, backgroundColor: '#a99' }}></div>
    <div className="visualization__tab" style={{ width: 4 * arr[40], height: 20, backgroundColor: '#b99' }}></div>
    <div className="visualization__tab" style={{ width: 4 * arr[50], height: 20, backgroundColor: '#c99' }}></div>
    <div className="visualization__tab" style={{ width: 4 * arr[55], height: 20, backgroundColor: '#d99' }}></div>
    <div className="visualization__tab" style={{ width: 4 * arr[60], height: 20, backgroundColor: '#e99' }}></div>
  </div>



  )
}
export default Visualization;
