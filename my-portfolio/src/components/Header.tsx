import React from 'react'
import HambergerMenu from './Icons/HambergerMenu';
import ThemeToggle from './Icons/ThemeToggle';

function Header() {
  return (
      <div className='flex gap-8 p-4 mb-2 flex-row-reverse'>
          <HambergerMenu />
          <ThemeToggle />
    </div>
  )
}

export default Header
