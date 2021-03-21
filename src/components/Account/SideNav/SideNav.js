import {Link} from 'react-router-dom'
import styles from './SideNav.module.css'


const SideNav = () => {
    return ( 

        <nav className={styles['side-nav']}>

        <ul>

            <li>
                <i class="fas fa-paw"></i>
                <Link to='/petinformation'>Pet Information</Link>
            </li>
             
            <li>
                <i class="fas fa-user-edit"></i>
                <Link to='/ownerinformation'>Owner Information</Link>
            </li> 

        </ul>

        </nav>


     );
}
 
export default SideNav;