import {
    Button,
    ButtonGroup,
    Container,
    Divider,
    IconButton,
    Stack,
    Text,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
  
  export const Footers = () => (
    <Container as="footer" role="contentinfo" bg="#063970" maxW={'100%'} color="white" >
      <Stack
        spacing="8"
        direction={{
          base: 'column',
          md: 'row',
        }}
        justify="space-between"
        py={{
          base: '12',
          md: '16',
        }}
      >
        <Stack
          spacing={{
            base: '6',
            md: '8',
          }}
          align="start"
        >
          <Text color="muted">Thanks for choose us for your activity.</Text>
          <Text fontSize='3rem' fontFamily='cursive'>
            <h1>SaFly</h1>
          </Text>
        </Stack>
        <Stack
          direction={{
            base: 'column',
            md: 'column',
            lg: 'row',
          }}
          spacing={{
            base: '12',
            md: '8',
          }}
        >
          <Stack direction="row" spacing="8">
            <Stack spacing="3"  minW="36" flex="1">
              <Text fontSize="md" fontWeight="bold" color="subtle">
                Contact Info
              </Text>
              <Text fontSize="md" fontWeight="semibold" color="grey">
                Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000
              </Text>
              <Text fontSize="md" fontWeight="semibold" color="grey">
                safelyfly@gmail.com
              </Text>
              <Text fontSize="md" fontWeight="semibold" color="grey">
                081-233-343-808
              </Text>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Stack spacing="3" shouldWrapChildren fontSize="md" fontWeight="semibold" color="subtle">
                <Button variant="link" color="white">Our Service</Button>
                <Button variant="link" color="white">Why Us</Button>
                <Button variant="link" color="white">Testimonial</Button>
                <Button variant="link" color="white">FAQ</Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        pt="8"
        pb="12"
        justify="center"
        direction={{
          md: 'column',
        }}
        align="center"
        flexDirection="column"
      >
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
          <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />
        </ButtonGroup>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} BinarFLy, Inc. All rights reserved.
        </Text>
      </Stack>
    </Container>
  )