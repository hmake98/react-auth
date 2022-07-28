/* eslint-disable jsx-a11y/anchor-is-valid */
import "./ForgotPassword.css";
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
  Divider,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ReactElement } from "react";
// eslint-disable-next-line import/no-cycle
import routes from "../router";

const CFaUserAlt = chakra(FaUserAlt);

// eslint-disable-next-line react/function-component-definition
const ForgotPassword: React.FC = (): ReactElement => {
  const navigate = useNavigate();

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
        <Heading color="teal.400">Forgot Password</Heading>
        <Divider pt={10} />
        <Box minW={{ base: "90%", md: "350px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <CFaUserAlt color="gray.300" />
                  </InputLeftElement>
                  <Input type="email" placeholder="Email address" />
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="button"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Back to{" "}
        <Link color="teal.500" onClick={() => navigate(routes.login.path)}>
          Log In
        </Link>
      </Box>
    </Flex>
  );
};

export default ForgotPassword;
