import React from 'react'
import { Navigate } from 'react-router-dom'
function Protected({ islogin, pop, children }) {
  if (islogin === false) {
 pop(true)
    return  <Navigate to="/images" /> 
  }
  return children
}
export default Protected