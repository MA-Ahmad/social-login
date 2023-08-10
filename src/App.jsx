import React from 'react'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import TwitterLogin from './TwitterLogin'

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <TwitterLogin />
    </ChakraProvider>
  )
}

export default App
