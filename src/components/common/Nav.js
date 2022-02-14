

import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function Nav() {
  const { pathname } = useLocation()

  // console.log('auth', isAuth)
 
  const [isOpen, setIsOpen] = React.useState()

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  React.useEffect(() => {
    console.log('page has changed')
    setIsOpen(false)
  }, [pathname])

  //*(bulma styling on navbar - navbar-burger is mediaquery-ready for tablet,phones)

  return (
    <nav className="navbar is-black bebas-font heading-name"> 
      <div className="container">
        <div className="navbar-brand">

          <Link to="/" className="navbar-item">
            Home
          </Link>
          <span className={`navbar-burger ${isOpen ? 'is-active' : ''}`} onClick={handleMenuToggle}>
            <span />
            <span />
            <span />
          </span>
        </div>
        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link to="/characters" className="navbar-item">
              See all characters
            </Link>
            <Link to="/ProfileCompare" className="navbar-item">
              Compare Powerstats
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}




export default Nav
