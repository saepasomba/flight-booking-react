import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Wave from "react-wavify";

export const Footer = () => (
  <>
    <Box position="relative" bg="" w="100vw" h="10rem">
      <Box
        position="absolute"
        bg=""
        transform="auto-gpu"
        translateY="1rem"
        w="100%"
      >
        <Wave
          fill="#222e5e"
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.15,
            points: 4,
          }}
        />
      </Box>
      <Box
        position="absolute"
        bg=""
        transform="auto-gpu"
        translateY="1rem"
        w="100%"
      >
        <Wave
          fill="#304083"
          options={{
            height: 50,
            amplitude: 25,
            speed: 0.2,
            points: 5,
          }}
        />
      </Box>
      <Box
        position="absolute"
        bg=""
        transform="auto-gpu"
        translateY="1rem"
        w="100%"
      >
        <Wave
          fill="#1C3879"
          options={{
            height: 70,
            amplitude: 30,
            speed: 0.25,
            points: 5,
          }}
        />
      </Box>
    </Box>
    <Container
      as="footer"
      role="contentinfo"
      bg="bluePrimary"
      maxW={"100%"}
      color="white"
    >
      <Stack
        spacing="8"
        direction={{
          base: "column",
          md: "row",
        }}
        justify="space-between"
        py={{
          base: "12",
          md: "16",
        }}
        width={{ base: "90%", lg: "80%" }}
        m="0 auto"
      >
        <Stack
          spacing={{
            base: "6",
            md: "8",
          }}
          align="start"
        >
          <Text color="muted">
            Life is a journey, take a vacation to make it a memorable one.
          </Text>
        </Stack>
        <Stack
          direction={{
            base: "column",
            md: "column",
            lg: "row",
          }}
          spacing={{
            base: "12",
            md: "8",
          }}
        >
          <Stack direction="row" spacing="8">
            <Stack spacing="3" minW="36" flex="1">
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
              <Stack
                spacing="3"
                shouldWrapChildren
                fontSize="md"
                fontWeight="semibold"
                color="subtle"
              >
                <Button variant="link" color="white">
                  Our Service
                </Button>
                <Button variant="link" color="white">
                  Why Us
                </Button>
                <Button variant="link" color="white">
                  Testimonial
                </Button>
                <Button variant="link" color="white">
                  FAQ
                </Button>
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
          md: "column",
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
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} SafelyFLy, Inc. All rights reserved.
        </Text>
      </Stack>
    </Container>
  </>
);
