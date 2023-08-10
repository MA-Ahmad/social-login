import React from 'react'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import Navigation from './Navigation'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
