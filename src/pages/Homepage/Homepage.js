import { Button } from '@chakra-ui/react'
import React from 'react'
import {Navbars} from '../../components/navbar/Navbar.jsx'
import {Footers} from '../../components/footer/Footer.jsx'

export default function Homepage() {
  return (
    <>
    <Navbars/>
    <h1>ini homepage</h1>
    <p>loremLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto natus eius laudantium accusantium unde et quia, hic quos voluptates cupiditate facilis fugiat inventore accusamus. Blanditiis cum sed repellendus labore doloribus.</p>
    <p>loremLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto natus eius laudantium accusantium unde et quia, hic quos voluptates cupiditate facilis fugiat inventore accusamus. Blanditiis cum sed repellendus labore doloribus.</p>
    <p>loremLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto natus eius laudantium accusantium unde et quia, hic quos voluptates cupiditate facilis fugiat inventore accusamus. Blanditiis cum sed repellendus labore doloribus.</p>
      <Button>
        Login
      </Button>

      <Button>
        Register
      </Button>
    <Footers/>
    </>
  )
}
