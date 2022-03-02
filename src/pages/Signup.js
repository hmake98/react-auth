import "../styles/Signup.css"
import React, { useState } from "react"
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  // Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react"
import { FaUserAlt, FaLock } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { routes } from "../router"

const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

function Signup() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const handleShowClick = () => setShowPassword(!showPassword)

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        {/* <Avatar bg="teal.500" /> */}
        <Heading color="teal.400">Sign Up</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <Input type="text" placeholder="First name" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input type="text" placeholder="Last name" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <CFaUserAlt color="gray.300" />
                  </InputLeftElement>
                  <Input type="email" placeholder="Email address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300">
                    <CFaLock color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Singup
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already a user?{" "}
        <Link color="teal.500" onClick={() => navigate(routes.login.path)}>
          Log In
        </Link>
      </Box>
    </Flex>
  )
}

export default Signup
