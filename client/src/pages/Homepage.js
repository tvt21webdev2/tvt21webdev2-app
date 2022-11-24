import React from 'react'
import { Link } from 'react-router-dom'


export default function Homepage() {
  return (
    <div>
      <Link to='/v1'>V1 CHART</Link> 
      <Link to='/v5'>V5 CHART</Link>
      <Link to='/v8'>V8 CHART</Link>
      <Link to='/v9'>V9 CHART</Link>
    </div>
  )
}
