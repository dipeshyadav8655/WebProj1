import React, { useState } from 'react'
import './ServicesCard.css'
import Icon from '../../Assets/image 3icon.svg'
import RightArrow from '../../Assets/Arrow Right.svg'

import { Data } from '../../Constants/Data/Data'

function ServicesCard({data,hover=false}) {
  const [onHover, setOnHover] = useState(false);
  return (
    <div className='ServicescardContainer flex flex-column flex-center' onMouseEnter={()=>setOnHover(true)}
    onMouseOut={()=>setOnHover(false)}>
        <div className='w'>
          {
            onHover
             ? <img src={data.hoverImage} style={{width:'4.861vw'}} /> : <img src={data.image} style={{width:'4.861vw'}} />
          }
            
        </div>
        <div className='text-center' onMouseEnter={()=>setOnHover(true)}>
            <p className='title-text'>{data.title}</p>
            <p className='cardText  text text-left'>{data.discription}</p>
        </div>
        <div className='button-text Learn-more flex felx-center'>
            Learn more <span> 
          <img className='arrow' src={RightArrow} alt='>' />  
               </span>
        </div>
    </div>
  )
}

export default ServicesCard