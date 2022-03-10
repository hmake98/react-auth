import "../styles/Signup.css"
import React, { useState } from "react"
import {
  Flex,
  Heading,
  Input,
  Button,
  Stack,
  Box,
  Link,
  FormControl,
  InputRightElement,
  Divider,
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { routes } from "../router"
import Storage from "../services/storage"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { usernameRegex, emailRegex } from "../constants/index"
import * as yup from "yup"

const schema = yup
  .object({
    username: yup.string().required("Username is required"),
    email: yup.string(),
    firstname: yup.string(),
    lastname: yup.string(),
    password: yup.string().required("Password is requried"),
    confirmpassword: yup.string().required("Confirm password is required"),
  })
  .required()

function Signup() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const handleShowClick = () => setShowPassword(!showPassword)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })
  const onSubmit = (data) => {
    console.log(data)
    Storage.set("isLoggedIn", true)
    navigate(routes.home.path)
  }

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
        <Heading color="teal.400">Sign Up</Heading>
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
                <Input
                  type="text"
                  placeholder="Username"
                  {...register("username", {
                    required: true,
                    pattern: usernameRegex,
                  })}
                />
              </FormControl>
              <FormControl>
                <Input
                  type="text"
                  placeholder="First name"
                  {...register("firstname", {
                    required: false,
                  })}
                />
              </FormControl>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Last name"
                  {...register("lastname", {
                    required: false,
                  })}
                />
              </FormControl>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: false,
                    pattern: emailRegex,
                  })}
                />
              </FormControl>
              <FormControl>
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
              </FormControl>
              <FormControl>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...register("confirmpassword", {
                    required: true,
                  })}
                />
              </FormControl>
              <Button
                borderRadius={0}
                type="button"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={handleSubmit(onSubmit)}
              >
                Sing Up
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
