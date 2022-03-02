import "../styles/Login.css"
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
  FormControl,
  FormHelperText,
  InputRightElement,
  Divider,
  FormErrorMessage,
} from "@chakra-ui/react"
import { FaUserAlt, FaLock } from "react-icons/fa"
import { routes } from "../router"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { emailRegex } from "./../constants/index"

const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

const schema = yup
  .object({
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string().required("Password is Required"),
  })
  .required()

function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })
  const handleShowClick = () => setShowPassword(!showPassword)
  const onSubmit = (data) => console.log(data)

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
        mb="4"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color="teal.400">Welcome</Heading>
        <Divider pt={10} />
        <Box minW={{ base: "90%", md: "350px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl isInvalid={errors.email}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <CFaUserAlt color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type="email"
                    placeholder="Email address"
                    {...register("email", {
                      required: true,
                      pattern: emailRegex,
                    })}
                  />
                </InputGroup>
                {errors.email && (
                  <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors.password}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300">
                    <CFaLock color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password", {
                      required: true,
                    })}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.password && (
                  <FormErrorMessage>
                    {errors.password?.message}
                  </FormErrorMessage>
                )}
                <FormHelperText textAlign="right">
                  <Link onClick={() => navigate(routes.forgot_password.path)}>
                    forgot password?
                  </Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="button"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={handleSubmit(onSubmit)}
              >
                Log In
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="teal.500" onClick={() => navigate(routes.signup.path)}>
          Sign Up
        </Link>
      </Box>
    </Flex>
  )
}

export default Login
