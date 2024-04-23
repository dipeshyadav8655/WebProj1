import React from 'react'
import './Hero.css'
import LeftCube from '../../Assets/cube.gif';
import RightImage from '../../Assets/Group 39491.svg';
import bottomRing from '../../Assets/Blend Group 1.svg'
import Button from '../../Generic/Button/Button';


function Hero() {
    const backgroundColorLeft = '#FFFFFF';
    const backgroundColorRight = 'black';
    const rightColor = 'white';
    const leftColor = 'black';
    return (
        <div>
            <div className='hero flex flex-center'>
                <div className='heading-text headingContainer'>
                    <p>Maximize Efficiency through Advanced Automation Solutions</p>
                    <div className='subHeading button-text text-white'>
                        <p>Welcome to Sphere Tech Labs, where Innovation meets Transformation!"</p>
                    </div>
                    {/* <div className='flex flex-space-around buttonContainer'>
                        <div className='whiteButton heroButton'>
                            Get started...
                        </div>
                        <div className='blackButton heroButton'>
                            Talk to sales
                        </div>
                    </div> */}
                    <div className='flex flex-center gap24 buttonContainer'>
                    <Button backgroundColor={backgroundColorLeft} color={leftColor} text={'Get started'} arrow={true} />
                    <Button backgroundColor={backgroundColorRight} color={rightColor} text={'Talk to sales'} arrow={false} />
                </div>
                </div>
                <div className='test cube'>
                    <img src={LeftCube} />
                </div>
                <div className='bottomCube cube'>
                    <img src={LeftCube} />
                </div>
                <div className='rightImage'>
                    <img src={RightImage} />
                </div>
                <div className='bottomRing'>
                    <img src={bottomRing} style={{width: '28.451vw'}} />
                </div>
                {/* <div className='test2'>
                    <img src={bottomRing} />
                </div> */}
            </div>
        </div>
    )
}

export default Hero