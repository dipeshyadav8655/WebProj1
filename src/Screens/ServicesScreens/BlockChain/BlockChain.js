import React from 'react';
import GenericHero from '../../../Generic/GenericHero/GenericHero'
import BlockChainImg from '../../../Assets/image 2.svg'
import Offerings from '../../../Components/Offerings/Offerings'
import Benefits from '../../../Components/Benefits/Benefits'
import Faq from '../../../Components/FAQ/Faq'
import Shade from '../../../Assets/EllipseTrasformation.svg'
import { servicesData } from '../../../Constants/Data/Data';

function BlockChain() {
  const imageWidth = '43.472vw'
  const backgroundColor = '#1c172b'
  const text = ' Transform Data into Artistic Expressions.';
  const textColor = 'white';
  const backgroundColorLeft = '#FFFFFF';
  const backgroundColorRight = '#1c172b';
  const rightColor = 'white';
  const leftColor = '#000000';
  return (
    <div className='relative'>
      <GenericHero sideImage={BlockChainImg} imageWidth={imageWidth} backgroundColor={backgroundColor} text={text} textColor={textColor} backgroundColorLeft={backgroundColorLeft} backgroundColorRight={backgroundColorRight} rightColor={rightColor} leftColor={leftColor} />
      <div className='absolute shade' style={{right: "0px",top: "11.111vw"}}>
        <img src={Shade} alt='' style={{width:'30.694vw'}}/>
      </div>
      <Offerings servicesData={servicesData.Services['Blockchain']['Our Offerings']} />
      <Benefits servicesData={servicesData.Services['Blockchain']['Benefits']}/>
      <Faq />
    </div>
  )
}

export default BlockChain