import React from 'react'
import { Link } from 'react-router-dom'


export default function Homepage() {
  return (
    <div>
      <Link to='/v1'>V1 CHART</Link> 
      <Link to='/v5'>V5 CHART</Link>
    </div>
  )
}
