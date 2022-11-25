import { Button } from '@chakra-ui/react'
import React from 'react'
import {App} from '../../components/navbar/Navbar.jsx'

export default function Homepage() {
  return (
    <>
    <App/>
    <h1>ini homepage</h1>
      <Button>
        Login
      </Button>

      <Button>
        Register
      </Button>
    </>
  )
}
