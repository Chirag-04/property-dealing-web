import React, { useState } from 'react'
import './slider.scss'


const Slider = ({images}) => {
  const [imageIndex , setImageIndex] = useState(null)
  const changeSlide = (dir) =>{
    if(dir === "left"){
      if(imageIndex == 0){
        setImageIndex(images.length -1 );
      }
      else {
        setImageIndex(imageIndex-1);
      }
    }
    else {
      if(imageIndex == images.length -1){
        setImageIndex(0);
      }
      else{
        setImageIndex(imageIndex+1);
      }
    }
  }
  return (
    <div className='slider'>
    { imageIndex!=null && (
      <div className='fullSlider'> 
       <div className='arrow' onClick={()=>changeSlide("left")}>
         <img alt='' src='/arrow.png'
         />
       </div>
       <div className='imgContainer'>
        <img alt='' src={images[imageIndex] }/>
       </div>
       <div className='arrow' onClick={()=>changeSlide("right")}>
          <img alt='' className='right' src='/arrow.png'/>
       </div>
       <div className='close' onClick={()=>setImageIndex(null)}>X</div>
    </div>)}
      <div className='bigImage'>
        <img  alt='' src={images[0]} onClick={()=>setImageIndex(0)}/>
      </div>
      <div className='smallImage'>
      {images.slice(1).map((image , index) =>(
        <img src={image} alt='' key={index} onClick={()=>setImageIndex(index+1)}/>
      ))}
      </div>
    </div> 
  )
}

export default Slider
