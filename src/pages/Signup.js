import '../styles/Signup.css';
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../router';

function Signup() {
    const navigate = useNavigate();
    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box p={2}>
                <Box textAlign="center">
                    <Heading>Sign Up</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form>
                        <FormControl isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input type="firstname" placeholder="First Name" />
                        </FormControl>
                        <FormControl mt={6} isRequired>
                            <FormLabel>Last Name</FormLabel>
                            <Input type="lastname" placeholder="Last Name" />
                        </FormControl>
                        <FormControl mt={6} isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="Email" />
                        </FormControl>
                        <FormControl mt={6} isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="Password" />
                        </FormControl>
                        <Button width="full" mt={4} type="submit" colorScheme='blue'>
                            Sign Up
                        </Button>
                        <Box mt={4}>
                            <Text> Already a user?  <Link onClick={() => navigate(routes.login.path)}>Log In</Link> </Text>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Flex>
    )
}

export default Signup;