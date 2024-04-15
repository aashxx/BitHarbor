import { Button, HStack, Stack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

// Header Component
const Navbar = () => {

  const { user } = useContext(AuthContext);

  return (
    <Stack direction={['column', 'row']} justifyContent={['center', 'space-between']} p={4} bgColor={'blackAlpha.900'} shadow={'base'}>
      <HStack justifyContent={'center'}>
        <Button variant={'unstyled'} color={'white'} fontSize={'3xl'} fontWeight={'thin'}>
          <Link to={'/'}>BitHarbor</Link>
        </Button>
      </HStack>
      <HStack justifyContent={'center'} spacing={'8'}>
        <Button variant={'unstyled'} color={'white'} px={'2'} css={{'&:hover': {color: 'gray'}}}>
          <Link to='/'>Home</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'} px={'2'} css={{'&:hover': {color: 'gray'}}}>
          <Link to='/coins'>Coins</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'} px={'2'} css={{'&:hover': {color: 'gray'}}}>
          <Link to='/exchanges'>Exchanges</Link>
        </Button>
      </HStack>
    </Stack>
  )
}

export default Navbar;
