import React from 'react';
import { Link, navigate } from "gatsby";
import Header from '../components/Header';

export default function home() {
  return (
  <div> 
    <Header text="This is a heading" subtext="The is the sub heading"></Header>
    Hello world from Hassan ali Khan
    <br/>
    <Link to="/about/">About</Link>
    <br/>
    <button onClick={()=>{
      navigate('/about')
    }}>About Page with button</button>
  </div>
  )
}
