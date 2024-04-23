import React from 'react';
import './WhyUs.css';
import ChooseUsImage from '../../Assets/Why choose us.svg'

function WhyUs() {
  return (
    <div className='whyUsContainer flex flex-column flex-center'>
        <div>
            <div className='subheading-text text-white text-center'>
                <p>Why<span className='focused-color'> Choose </span> Us</p>
            </div>
            <div className='description-container whyUsDescription text'>
                <p>Our steadfast dedication ensures high-quality work that consistently meets deadlines, stays within budget, and adheres to the defined scope, delivering as promised</p>
            </div>
        </div>
        <div className='choseUsImage'>
            <img src={ChooseUsImage} alt='Reasons'/>
        </div>
    </div>
  )
}

export default WhyUs