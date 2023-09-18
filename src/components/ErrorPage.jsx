import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

// Error Display Component
const ErrorPage = () => {
  return (
    <Alert status='error' position={'fixed'} bottom={'4'} left={'50%'} transform={'translateX(-50%)'} w={'container.lg'}>
      <AlertIcon />
      Error Loading...404
    </Alert>
  )
}

export default ErrorPage
