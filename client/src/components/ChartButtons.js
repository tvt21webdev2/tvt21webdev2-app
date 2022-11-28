import React, { forwardRef, useRef } from 'react'
import Chart from "chart.js/auto";
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(zoomPlugin);

// DOES NOT WORK, IDK WHY. PLEASE FIX


// const myChart = new Chart('myChart', myRef);
export default function ChartButtons(myRef) {
  // const chartRef = useRef(myRef)
  console.log(myRef);

  const handleResetZoom = () => {
    myRef.current.resetZoom();
    if (myRef && myRef.current) {
    }
  }
  
  const handleZoomIn = () => {
    if (myRef && myRef.current) {
      myRef.current.zoom({x: 1.1});
    }
  }
  
  const handleZoomOut = () => {
    if (myRef && myRef.current) {
      myRef.current.zoom({x: 0.9});
    }
  }
  
  const handlePanLeft = () => {
    console.log('click');
    if (myRef && myRef.current) {
      myRef.current.pan({x: 250}, undefined, 'default');
    }
  }
  
  const handlePanRight = () => {
    if (myRef && myRef.current) {
      myRef.current.pan({x: -250}, undefined, 'default');
    }
  }

  return (
    <>
      <button onClick={handlePanLeft}>Pan left</button>
      <button onClick={handleZoomOut}>Zoom out</button>
      <button onClick={handleResetZoom}>Reset Zoom</button>
      <button onClick={handleZoomIn}>Zoom in</button>
      <button onClick={handlePanRight}>Pan right</button>
    </>
  );
}