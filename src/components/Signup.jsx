import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Img,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Signup = () => {
    
  const { handleGoogleSignup, handleSignup, createUser, setCreateUser } = useContext(AuthContext);

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Img
            src="/favicon.png"
            alt="BitHarbor"
            mx={"auto"}
            h={"20"}
            w={"20"}
            objectFit={"contain"}
          />
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              Create a new account
            </Heading>
            <Text color="fg.muted">
              Already have an account? <Link to="/auth/login">Login</Link>
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <form method="post" onSubmit={handleSignup}>
                <Stack spacing="5">
                    <FormControl isRequired>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input id="name" name="name" type="text" value={createUser.name} onChange={e => setCreateUser({...createUser, [e.target.name]: e.target.value })} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input id="email" name="email" type="email" value={createUser.email} onChange={e => setCreateUser({...createUser, [e.target.name]: e.target.value })} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input id="password" name="password" type="password" value={createUser.password} onChange={e => setCreateUser({...createUser, [e.target.name]: e.target.value })} />
                    </FormControl>
                    <Button type="submit">Sign Up</Button>
                </Stack>
            </form>
            <Stack spacing="6">
              <HStack>
                <Divider />
                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                  OR
                </Text>
                <Divider />
              </HStack>
              <Button onClick={handleGoogleSignup} leftIcon={<FaGoogle />}>
                Continue with Google
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
export default Signup;
