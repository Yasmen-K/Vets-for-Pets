import {useState} from 'react'

import handleSubmit  from './LogInAuth'
import eventBus from '../../../../EventBus/EventBus'
import styles from './LogIn.module.css'




const LogIn = () => {
    

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [logged,setLogged] = useState('')
    
    
    
    
    
    
    eventBus.dispatch('handleSubmit',logged)
    
    
    return ( 

        <div className={styles["main-container"]}>
            

            
            <img src="Black-German-Shepherd.jpg" alt="" className={styles["image-container"]}/>
            <form onSubmit={(e) => handleSubmit(e,email,password,setLogged)} className={styles["logIn-form"]} >
            <h1 className={styles["login-message"]}>Member Login</h1>

            <label htmlFor="email">Enter email</label>
            <input 
            type="email"
            onChange = {(e) => setEmail(e.target.value)}
            required
            />


            <label htmlFor="password">Enter password</label>
            <input 
            type="password"
            
            onChange = {(e) => setPassword(e.target.value)}
            required
            />

            <button>Log In</button>

            </form>

           
        </div>
     );
}
 
export default LogIn ;