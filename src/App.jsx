import React from 'react'

const TwitterLoginButton = () => {
  const handleTwitterLogin = () => {
    window.location.href = 'http://localhost:3001/auth/twitter' // Replace with your backend OAuth 2.0 authentication URL
  }

  return <button onClick={handleTwitterLogin}>Login with Twitter</button>
}

export default TwitterLoginButton
