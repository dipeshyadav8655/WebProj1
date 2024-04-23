import React, { useState } from 'react';
import Logo from '../../asset/Logo.svg';
import { NavLink } from 'react-router-dom';
import { Data } from '../../Constants/Data/Data';
import DownArrow from '../../Assets/NavIcon/DownArrow.svg'
import './NavBar.css'; 

function NavBar() {
  const [showOptions, setShowOptions] = useState(false);
  const [pannel, setPannel] = useState('')
  const [showDropdown, setShowDropdown] = useState(false);
  const [leftMenu,setLeftMenu] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleLeft = () => {
    setLeftMenu((prev)=>!prev);
    if (leftMenu) {
      // Enable scrolling on body when panel is closed
      document.body.style.overflow = 'auto';
    } else {
      // Disable scrolling on body when panel is open
      document.body.style.overflow = 'hidden';
    }
  };
  const sername = 'tecnologyDropDown';

  return (
    <div className='navMain relative'>
      <div style={{display: leftMenu ? 'block' : 'none'}} className='LeftPanel left-panel'>
      <div onClick={toggleLeft} style={{textAlign:'right', cursor:'pointer'}}>
        <p>Close</p>
      </div>
      <nav className="navigation">
        <ul>
          <li>
          <NavLink to={'home'} style={{color:'white'}} className='navLink' onClick={toggleLeft}>
            Home
          </NavLink>
          </li>
      
          <li onClick={toggleDropdown}>Service
            {showDropdown && (
              <ul className="dropdown">
                {Data["serviceDropDown"].map(num => (
                  <p className='gray-text'>
                  <NavLink to={num.route} className='navLink' onClick={toggleLeft}>
                    {num.name}
                  </NavLink>
                </p>
                ))}
              </ul>
            )}
          </li>
          <li>Technology</li>
          <li>Industry</li>
        </ul>
      </nav>
      </div>
      <div className='navContainer bg-black flex flex-space-between relative'>
        <div className='flex flex-center logo'>
          <img src={Logo} alt='Logo' />
          <p className='button-text text-white'>Sphere Tech Labs</p>
        </div>
        <div onClick={toggleLeft} className='HamBurger text'>
          <p style={{color:'white'}}>Menu</p>
        </div>
        <div className='flex flex-space-evenly text-white text menu'>
          <NavLink to={'home'} style={{ textDecoration: 'none',color:'white' }} onClick={() => setShowOptions(false)}>
            Home
          </NavLink>
          <p onClick={() => {
            setPannel('serviceDropDown')
            setShowOptions(true)
            }} style={{ cursor: 'pointer' }}>
            Service
          </p>
          <div style={{display: pannel === 'serviceDropDown' && showOptions ?  'none' : 'block', marginLeft:'-1.389vw', marginTop:'0.4vw',cursor: 'pointer' }} className='downArrow' onClick={() => {
            setPannel('serviceDropDown')
            setShowOptions(true)
            }}>
            <img src={DownArrow} alt='' width='15vw' />
          </div>
          <p onClick={() => {
            setPannel('tecnologyDropDown')
            setShowOptions(true)
            }} style={{cursor: 'pointer'}}>Technologies</p>
            <div style={{display: pannel === 'tecnologyDropDown' && showOptions ? 'none' : 'block', marginLeft:'-1.389vw', marginTop:'0.4vw',cursor: 'pointer' }} onClick={() => {
            setPannel('tecnologyDropDown')
            setShowOptions(true)
            }} className='downArrow'>
            <img src={DownArrow} alt='' width='15vw' />
          </div>
          <p onClick={() => {
            setPannel('industryDropDown')
            setShowOptions(true)
            }} style={{cursor: 'pointer'}}>Industries</p>
            <div style={{display: pannel === 'industryDropDown' && showOptions ? 'none' : 'block', marginLeft:'-1.389vw', marginTop:'0.4vw',cursor: 'pointer' }} onClick={() => {
            setPannel('industryDropDown')
            setShowOptions(true)
            }} className='downArrow'>
            <img src={DownArrow} alt='' width='15vw' />
          </div>
        </div>
        <div className='whiteButton button-text contact'>
          <p>Contact</p>
        </div>
      </div>

      {showOptions && (
        <div className='navDropDown' onClick={() => setShowOptions(false)} onScroll={() => setShowOptions(false)}>
          <div
            style={{
              width: '100%',
              backgroundColor: 'white',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              padding: '2.061vw 8.472vw',
              rowGap: '1.667vw',
              borderBottom: '0.139vw solid #5D2EDE',
              borderTop: '0.139vw solid #5D2EDE',
              borderRadius: '0.556vw'
            }}
          >
            {Data[pannel].map((item) => (
              <div style={{ width: '21.528vw'}}>
              <div key={item.id} style={{ width: '21.528vw', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',borderBottom: item.subLink.length && '0.139vw solid #5D2EDE', 
              padding: item.subLink.length && '1.111vw 0.556vw', borderRadius: '0.556vw' }}>
                <img src={item.icon} alt='Icon' style={{ width: '1.667vw' }} />
                <p className='gray-text'>
                  <NavLink to={item.route} className='navLink'>
                    {item.name}
                  </NavLink>
                </p>
                </div>
                {item.subLink.length > 0 &&
                  item.subLink.map((link, index) => (
                    <div key={index} className='subLink' style={{paddingLeft:'3.472vw'}}>
                    <p className='gray-text'>
                        {link.name}
                    </p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
