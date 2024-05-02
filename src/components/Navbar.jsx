import { Button, HStack, Img, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Popup from 'reactjs-popup';

// Header Component
const Navbar = () => {

  const { user, handleSignOut } = useContext(AuthContext);

  return (
    <Stack direction={['column', 'row']} justifyContent={['center', 'space-between']} py={'4'} px={['14', '20']} bgColor={'blackAlpha.900'} shadow={'base'}>
      <HStack justifyContent={'center'}>
        <Button variant={'unstyled'} color={'white'} fontSize={'3xl'} fontWeight={'thin'}>
          <Link to={'/'}>BitHarbor</Link>
        </Button>
      </HStack>
      <HStack justifyContent={'center'} spacing={['4', '8']}>
        <Button variant={'unstyled'} color={'white'} px={'2'} css={{'&:hover': {color: 'gray'}}}>
          <Link to='/'>Home</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'} px={'2'} css={{'&:hover': {color: 'gray'}}}>
          <Link to='/coins'>Coins</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'} px={'2'} css={{'&:hover': {color: 'gray'}}}>
          <Link to='/exchanges'>Exchanges</Link>
        </Button>
        {
          user ? (
            <Popup trigger={<Button h={'12'} w={'12'} p={'0'} borderRadius={'full'} border={'2px solid black'}>
              <Img maxH={'full'} borderRadius={'full'} maxW={'full'} src={user?.photo} alt='AV' />
            </Button>}>
              {
                (close) => (
                  <VStack bgColor={'white'} px={'8'} py={'5'} borderRadius={'md'}>
                    <Text fontWeight={'bold'} fontSize={'lg'}>{user.name?.split(' ')[0]}</Text>
                    <Text fontSize={'md'}>{user.subscription.toUpperCase()} PLAN</Text>
                    <Button onClick={handleSignOut} variant={'ghost'} px={'2'} color={'white'} bgColor={'blackAlpha.900'} css={{'&:hover': {color: 'gray'}}}>
                      Log Out
                    </Button>
                  </VStack>
                )
              }
            </Popup>
          ) : (
            <Button variant={'ghost'} bgColor={'white'} px={'2'} css={{'&:hover': {color: 'gray'}}}>
              <Link to='/auth/signup'>Sign Up</Link>
            </Button>
          )
        }
      </HStack>
    </Stack>
  )
}

export default Navbar;
