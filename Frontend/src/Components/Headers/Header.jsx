import React, { useEffect, useRef } from 'react'
import logo from '../../assets/images/logo1.jpg'
import { Link, NavLink } from 'react-router-dom'
import userImg from '../../assets/images/avatar.png'
import {BiMenu} from 'react-icons/bi'

const navLinks = [
  {
    path : "/home",
    display : "Home"
  },
  {
    path : "/doctors",
    display : "Products"
  },
  {
    path : "/contact",
    display : "Contact"
  },
]

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader=()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header')
      }else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(() =>{
    handleStickyHeader()
    return () => window.removeEventListener('scroll', handleStickyHeader)
  })

  const toggleMenu=() => menuRef.current.classList.toggle('show__menu')
  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ==============LOGO============= */}
          <div style={{ width: "40px" }}>
            <img src={logo} alt="" />
          </div>

          {/* ==============menu============= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.75rem]">
              {navLinks.map((ele, i) => 
                <li key={i}>
                  <NavLink
                    to={ele.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {ele.display}
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          {/* ====================NAV RIGHT================= */}
          <div className="flex items-center gap-4">
            <div className='hidden'>
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-poiner">
                  <img src={userImg} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>
            {/* <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex-items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link> */}
            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer'/>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
