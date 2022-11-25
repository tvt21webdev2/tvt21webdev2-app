import React from 'react'
import '../styles/frontpage.css'
import video from '../images/nature.mp4';
import Timeline from '../components/Timeline';


export default function Frontpage() {
  return (
    <div className="container">
      <video autoPlay loop muted playsInline className="back-video">
        <source src={video} type="video/mp4"></source>
      </video>
      <div className="content">
        <h1>Climate change charts</h1>
        <Timeline />
      </div>
    </div>
  )
}
