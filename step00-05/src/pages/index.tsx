import React from 'react';
import { Link } from "gatsby";

export default function home() {
  return (
  <div> 
      <p>We can link pages in Gatsby by using Link</p>
      <Link to="/about/">About</Link>
  </div>
  )
}