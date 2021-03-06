import { Switch, Route } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import { useState, useEffect } from 'react'

const Routes = ({ modalIsOpen, setModalIsOpen, userTec, setUserTec }) => {
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('@KenzieHub:token')

    if (token) {
      return setAuth(true)
    }
  }, [auth])

  return (
    <Switch>
      <Route exact path='/signup'>
        <Signup auth={auth} setAuth={setAuth} />
      </Route>
      <Route exact path='/'>
        <Login auth={auth} setAuth={setAuth} />
      </Route>
      <Route exact path='/dashboard'>
        <Dashboard
          auth={auth}
          setAuth={setAuth}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          userTec={userTec}
          setUserTec={setUserTec}
        />
      </Route>
    </Switch>
  )
}

export default Routes
