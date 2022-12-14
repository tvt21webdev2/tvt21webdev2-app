import React, { forwardRef } from 'react'
import Chart from "chart.js/auto";
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(zoomPlugin);

const WrappedComponent = forwardRef(
  function myFunction(props, ref) {
    const handleResetZoom = () => {
      ref.current.resetZoom();
      if (ref && ref.current) {
      }
    }
    
    const handleZoomIn = () => {
      if (ref && ref.current) {
        ref.current.zoom({x: 1.1});
      }
    }
    
    const handleZoomOut = () => {
      if (ref && ref.current) {
        ref.current.zoom({x: 0.9});
      }
    }
    
    const handlePanLeft = () => {
      if (ref && ref.current) {
        ref.current.pan({x: 250}, undefined, 'default');
      }
    }
    
    const handlePanRight = () => {
      if (ref && ref.current) {
        ref.current.pan({x: -250}, undefined, 'default');
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
);

export default WrappedComponent;