/* eslint-disable no-undef */
import {auth ,db} from '../../../../Firebase/auth'
import {useState} from 'react'
import styles from './SignUp.module.css'

import SignUpForm from './SignUpForm/SignUpForm'



const SignUp = () => {
 

const [email,setEmail] = useState(' ') 
const [password,setPassword] = useState(' ')


let handleSubmit = (e) =>{
    e.preventDefault()
    setPassword(e.target.password.value)
    setEmail(e.target.email.value)

    auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user.email)

    db.collection('user').doc(user.uid).set({
        
       
        email
    })
    // ...
  })
  .catch((error) => {
    //var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });

  e.target.password.value = ''
  e.target.email.value = ''
 
}


 
 

    return ( 
            <div className={styles['sign-up-wrapper']}>

            <SignUpForm handleSubmit={handleSubmit}/>
                  

            </div>
        
        

     );
}
 
export default SignUp;