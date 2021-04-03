import {Link} from 'react-router-dom'

import styles from './Navigation.module.css'







const Navigation = () => {
    
    
   

   
            
    
    
    
    
    return ( 
        <div className={styles['main-container']}>
            

            <ul className={styles["main-navigation"]}>
                <li>
                    <Link to ='/'>Home</Link>
                </li>
                    <li>
                    <Link to='/services'>Services</Link>

                    </li>

                    <li>
                        <Link to="/patientstories">Patient Stories</Link>
                    </li>
            </ul>
            
            
            
                
                <ul className={styles['additional-navigation']}>
                    <li>
                    <Link to="/login">Log In</Link>    
                    </li> 

                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                    </ul>
                    

                        <ul className={styles['additional-navigation']}>

                    <li>
                    <Link to='/account'>Account</Link>
                    </li>
                        </ul>


                    


                    
            

            
            
               



           
        </div>
     );
}
 
export default Navigation;