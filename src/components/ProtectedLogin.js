import React from 'react'
import { Navigate } from 'react-router-dom'
function ProtectedLogin({ islogin, children }) {
  if (islogin) {
    return <Navigate to="/" />
  }
  return children
}
export default ProtectedLogin