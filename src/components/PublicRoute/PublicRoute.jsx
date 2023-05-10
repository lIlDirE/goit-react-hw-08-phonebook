import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PublicRoute = ({children}) => {
	const token = useSelector(state => state.signup.token);
  return (
	!token ? children : <Navigate to= '/contacts'/>

  )
}

export default PublicRoute