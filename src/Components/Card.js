import React from 'react'
import img1 from "../myimages/img1.avif";
import img2 from "../myimages/img2.avif";
import img3 from "../myimages/img3.avif"
import img4 from "../myimages/img4.avif";
import img5 from "../myimages/img5.avif"
import img6 from "../myimages/img6.avif"
import img7 from "../myimages/img7.avif"
import img8  from "../myimages/img8.avif"
import "../Components/Card.css"

export default function Card() {
  return (
    <section id='header3'>
    <div className='divmain'>
     <div className='product'>
        <img src={img1} alt="" />
        
       
        
      <a href='' className='btn'>Book Now</a>
     </div>
     <div className='product1'>
        <img src={img2} alt="" />
       
        
        
      <a href='' className='btn'>Book Now</a>
     </div>
     <div className='product2'>
        <img src={img3} alt="" />
       
       
      
      <a href='' className='btn'>Book Now</a>
     </div>
     <div className='product3'>
        <img src={img4} alt="" />
       
      <a href='' className='btn'>Book Now</a>
     </div>
    </div>

<h1><b>Upcoming Relaeases</b></h1>

    <div className='divmain'>
     <div className='product'>
        <img src={img5} alt="" />
       
       
      <a href='' className='btn'>Book Now</a>
     </div>
     <div className='product1'>
        <img src={img6} alt="" />
       
      
       
      <a href='' className='btn'>Book Now</a>
     </div>
     <div className='product2'>
        <img src={img7} alt="" />
       
       
        
      <a href='' className='btn'>Book Now</a>
     </div>
     <div className='product3'>
        <img src={img8} alt="" />
        
       
        
      <a href='' className='btn'>Book Now</a>
     </div>

    </div>
    </section>
  )
}
