import "../styles/Signup.scss";
import { ReactElement, useState } from "react";
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
  InputGroup,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import routes from "../router";
import Storage from "../services/localStorage";
import { usernameRegex, emailRegex } from "../common/utils";

type FormInputs = {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  confirmpassword: string;
};

const schema = yup
  .object({
    username: yup.string().required("username is required"),
    email: yup.string(),
    firstname: yup.string(),
    lastname: yup.string(),
    password: yup.string().required("password is requried"),
    confirmpassword: yup.string().required("confirm password is required"),
  })
  .required();

const Signup: React.FC = (): ReactElement => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormInputs) => {
    console.log(data);
    Storage.set("isLoggedIn", true);
    navigate(routes.home.path);
  };

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
              <FormControl isInvalid={!!errors.username}>
                <Input
                  type="text"
                  placeholder="Username"
                  {...register("username", {
                    required: true,
                    pattern: usernameRegex,
                  })}
                />
                <FormErrorMessage>
                  {errors.username && errors.username.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.firstname}>
                <Input
                  type="text"
                  placeholder="First name"
                  {...register("firstname", {
                    required: false,
                  })}
                />
                <FormErrorMessage>
                  {errors.firstname && errors.firstname.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.lastname}>
                <Input
                  type="text"
                  placeholder="Last name"
                  {...register("lastname", {
                    required: false,
                  })}
                />
                <FormErrorMessage>
                  {errors.lastname && errors.lastname.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email}>
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: false,
                    pattern: emailRegex,
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.password}>
                <InputGroup>
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
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.confirmpassword}>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...register("confirmpassword", {
                    required: true,
                  })}
                />
                <FormErrorMessage>
                  {errors.confirmpassword && errors.confirmpassword.message}
                </FormErrorMessage>
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
  );
};

export default Signup;
