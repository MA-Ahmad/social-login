import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../constants'

const Index = () => {
  const location = useLocation()
  const [oauthVerifier, setOauthVerifier] = useState('')
  const [oauthToken, setOauthToken] = useState('')
  const [useInfo, setUseInfo] = useState('')

  useEffect(() => {
    // Extract the query parameters from the URL
    const queryParams = new URLSearchParams(location.search)

    // Get the value of the oauth_verifier parameter
    const oauth_verifier = queryParams.get('oauth_verifier')
    const oauth_token = queryParams.get('oauth_token')
    if (oauth_verifier) {
      setOauthVerifier(oauth_verifier)
    }
    if (oauth_token) {
      setOauthToken(oauth_token)
    }

    if (oauth_verifier && oauth_token) {
      fetchUserInfo(oauth_verifier, oauth_token)
    }

    // Now you can use the oauthVerifier in your logic, such as sending it to your backend
    console.log('oauth_verifier:', oauth_verifier)
    console.log('oauth_token:', oauth_token)
  }, [location.search])

  const fetchUserInfo = (oauthVerifier, oauthToken) => {
    // Make an Axios POST request with the oauth_verifier
    if (oauthVerifier) {
      const postData = {
        oauthVerifier: oauthVerifier,
        oauthToken: oauthToken,
        // otherData: value, // Add any other data you want to send
      }

      axios
        .post(`${BASE_URL}/complete_authentication`, postData)
        .then((response) => {
          console.log('POST response:', response.data)
          // Handle the response from the server as needed
        })
        .catch((error) => {
          console.error('POST error:', error)
          // Handle the error as needed
        })
    }
  }

  return <Box></Box>
}

export default Index
