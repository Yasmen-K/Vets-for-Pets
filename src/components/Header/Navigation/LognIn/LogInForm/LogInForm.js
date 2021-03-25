// import {useState} from 'react'
import styles from './LogInForm.module.css'
// import {auth} from '../../../../../Firebase/auth'
// import EventBus from '../../../../../EventBus/EventBus'
// import {useHistory } from 'react-router-dom'


const LogInForm = ({handleSubmit,email,password}) => {
    
    
    
    // let history = useHistory()
    
    // const [userUid,setUserUid] = useState('')

    // async function LogIn(){


    //    await auth.signInWithEmailAndPassword(email, password)
    //        .then((userCredential) => {
    //            // Signed in
    //            var user = userCredential.user;
               
    //            console.log(user.uid)
    
    //             setUserUid(user.uid)
                
                
    //             history.push('/account')
    //             EventBus.dispatch('handleSubmit',userUid)
                
    //         })
    //         .catch((error) => {
    //             //var errorCode = error.code;
                
    //             var errorMessage = error.message;
    //             console.log(errorMessage)
                
    //         });
            

    // }
            
        
        
       
        return ( 
            
            <div className={styles["main-container"]}>
            

            
            <img src="Black-German-Shepherd.jpg" alt="" className={styles["image-container"]}/>

            <form onSubmit={(e) => handleSubmit(e)} className={styles["logIn-form"]} >
            <h1 className={styles["login-message"]}>Member Login</h1>

            <label htmlFor="email">Enter email</label>
            <input 
            type="email"
            name="email"
            
            required
            />


            <label htmlFor="password">Enter password</label>
            <input 
            type="password"
            
            name="password"
            required
            />

            <button>Log In</button>

            </form>
           

        </div>


     );
}
 
export default LogInForm;