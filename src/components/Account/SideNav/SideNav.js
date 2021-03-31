import {Link} from 'react-router-dom'
import styles from './SideNav.module.css'


const SideNav = () => {
    return ( 

        <nav className={styles['side-nav']}>

        <ul>

            <li>
                <i className="fas fa-paw"></i>
                <Link to="/petinformation">Pet Information</Link>
            </li>
             
           

            <li>
                 <i className="fas fa-user-edit"></i>
                <Link to='/ownerinformation'>Owner Information</Link>
            </li>

             <li>
                <Link to="/addstory">Share Your Story</Link>
            </li>

            <li>
                {/* <Link>Make an appointment</Link> */}
            </li> 

        </ul>

        </nav>


     );
}
 
export default SideNav;