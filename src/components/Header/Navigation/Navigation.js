import {Link} from 'react-router-dom'
import eventBus from '../../../EventBus/EventBus'
import {useState,useEffect} from 'react'
import styles from './Navigation.module.css'






const Navigation = () => {
    
    const [logged,setLogged] = useState('')
    console.log(logged)
    
    useEffect(() =>{
        
       eventBus.on('handleSubmit',(data) =>{
            setLogged(data)
        })

        return null
    })
    
    return ( 
        <div className={styles['main-container']}>

            <ul className={styles["main-navigation"]}>
                <li>
                    <Link to ='/'>Home</Link>
                </li>
                    <li>
                    <Link to='/services'>Services</Link>

                    </li>
            </ul>
            
            
            {!logged ? (
                
                <ul className={styles['additional-navigation']}>
                    <li>
                    <Link to="/login">Log In</Link>    
                    </li> 

                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                    </ul>
                    ):(

                        <ul className={styles['additional-navigation']}>

                    <li>
                    <Link to='/account'>Account</Link>
                    </li>
                        </ul>


                    )


                    }
            

            
            
               



           
        </div>
     );
}
 
export default Navigation;