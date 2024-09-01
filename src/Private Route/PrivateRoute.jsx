import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Authcontext } from '../Authcontext/Authcontextprovider'

const PrivateRoute = ({children}) => {
    const {isAuth} = useContext(Authcontext)
    if(!isAuth){
        return <Navigate to='/login'/>
    }
 return children;
}

export default PrivateRoute
