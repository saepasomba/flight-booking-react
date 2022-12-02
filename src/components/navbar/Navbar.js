import React from 'react'
import "./navbar.css"
import { Button, ButtonGroup } from '@chakra-ui/react'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">BinarFly</span>
        <div className="navItems">
        <Button colorScheme='blue'>Register</Button>
        <Button colorScheme='blue'>Login</Button>
        </div>
      </div>
    </div>
  )
}