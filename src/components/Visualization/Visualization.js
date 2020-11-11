import React from 'react';
const Visualization = ({ arr }) => {
  console.log(arr);
  return (<>
    <div style={{ width: 4 * arr[5], height: 40, backgroundColor: '#289' }}></div>
    <div style={{ width: 4 * arr[7], height: 40, backgroundColor: '#990' }}></div>
    <div style={{ width: 4 * arr[9], height: 40, backgroundColor: '#950' }}></div>
    <div style={{ width: 4 * arr[11], height: 40, backgroundColor: '#940' }}></div>
    <div style={{ width: 4 * arr[13], height: 40, backgroundColor: '#790' }}></div>
    <div style={{ width: 4 * arr[15], height: 40, backgroundColor: '#399' }}></div>
    <div style={{ width: 4 * arr[17], height: 40, backgroundColor: '#599' }}></div>
    <div style={{ width: 4 * arr[19], height: 40, backgroundColor: '#699' }}></div>
    <div style={{ width: 4 * arr[21], height: 40, backgroundColor: '#799' }}></div>
    <div style={{ width: 4 * arr[25], height: 40, backgroundColor: '#999' }}></div>
    <div style={{ width: 4 * arr[30], height: 40, backgroundColor: '#a99' }}></div>
    <div style={{ width: 4 * arr[40], height: 40, backgroundColor: '#b99' }}></div>
    <div style={{ width: 4 * arr[50], height: 40, backgroundColor: '#c99' }}></div>
    <div style={{ width: 4 * arr[55], height: 40, backgroundColor: '#d99' }}></div>
    <div style={{ width: 4 * arr[60], height: 40, backgroundColor: '#e99' }}></div>
  </>



  )
}
export default Visualization;
