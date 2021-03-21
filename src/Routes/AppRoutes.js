import {Route} from 'react-router-dom'
import Home from '../components/Home/Home'
import LogIn from '../components/Header/Navigation/LognIn/LogIn'
import SignUp from '../components/Header/Navigation/Sign Up/SignUp'
import Account from '../components/Account/Account'
import Services from '../components/Services/Services'
import PetInformation from '../components/Account/PetInformation/PetInformation'
const AppRoutes = () => {
    return ( 
        <div>

        <Route path='/' exact component={Home}/>
        <Route path='/login' component= {LogIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path='/account' component={Account}/>
        <Route path='/services'component={Services}/>
        <Route path="/petinformation" component={PetInformation}/>

        </div>


     );
}
 
export default AppRoutes;