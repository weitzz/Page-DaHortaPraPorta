import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import ForgotPassword from '../pages/ForgotPassword'
import Erro from '../pages/Error'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route  path='/' component={SignIn} exact />
        <Route path='/register' component={SignUp} exact />
        <Route path='/forgotpassword' component={ForgotPassword} exact />
        <Route exact path='*' component={Erro} />

        
        </Switch>
    </Router>
  )
}

export default Routes

