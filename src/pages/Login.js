import '../styles/Login.css';
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../router';

function Login() {
    const navigate = useNavigate();
    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box p={2}>
                <Box textAlign="center">
                    <Heading>Login</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="Email" />
                        </FormControl>
                        <FormControl mt={6} isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="Password" />
                        </FormControl>
                        <Button width="full" mt={4} type="submit" colorScheme='blue'>
                            Log In
                        </Button>
                        <Box mt={4}>
                            <Text> Not a user?  <Link onClick={() => navigate(routes.signup.path)}>Sign Up</Link> </Text>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Flex>
    )
}

export default Login;