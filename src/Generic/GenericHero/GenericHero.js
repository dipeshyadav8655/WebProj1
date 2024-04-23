import React from 'react'
import Button from '../Button/Button'
import './GenericHero.css';
import LeftCube from '../../Assets/cube.gif';
import Shade from '../../Assets/EllipseTrasformation.svg'
// import LeftCube from '../../Assets/cube.gif'

function GenericHero({ sideImage, imageWidth, backgroundColor, text, dualColor = false, dualText = '', textColor, backgroundColorLeft, backgroundColorRight, rightColor, leftColor }) {

    return (
        <div style={{ backgroundColor: `${backgroundColor}` }} className='hero-container flex flex-center relative'>
            <div>
                <div style={{ color: `${textColor}` }} className='hero-title heading-text'>
                    <p>{text}{
                        dualColor ? <span className='focused-color'> {dualText}</span> : ''
                    }</p>
                </div>
                <div className='flex flex-center gap24 mt-80'>
                    <Button backgroundColor={backgroundColorLeft} color={leftColor} text={'Get started'} arrow={true} />
                    <Button backgroundColor={backgroundColorRight} color={rightColor} text={'Talk to sales'} arrow={false} />
                </div>
                {/* <div className='test'>
                    <img src={LeftCube} />
                </div> */}
            </div>
            {/* <div className='test cube'>
                    <img src={LeftCube} />
                </div>
                <div className='bottomCube cube'>
                    <img src={LeftCube} />
                </div> */}
            <div style={{ width: '40.306vw' }} className='heroImage'>
                <img src={sideImage} style={{ width: '40.306vw' }} />
            </div>
        </div>
    )
}

export default GenericHero