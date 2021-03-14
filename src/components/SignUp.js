/* eslint-disable no-undef */
import {auth} from '../Firebase/auth'
import {useState} from 'react'

const SignUp = () => {
 

const [email,setEmail] = useState(' ') 
const [password,setPassword] = useState(' ')

let handleSubmit = (e) =>{
    e.preventDefault()

    auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    //var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
 
}


 
 

    return ( 

        
        <div>

            <h2>Sign Up</h2>
            <form onSubmit = {handleSubmit}>
                <label htmlFor="email">Enter email</label>
                <input 
                type="email"
                //value = {email} 
                onChange = {(e) => setEmail(e.target.value) }
                required/>

                <label htmlFor="password">Enter password</label>
                <input 
                type="password"
               // value = {password}
                onChange = {(e) => setPassword(e.target.value)} 
                required/>

               <button>Sign Up</button>
            </form>
        </div>

     );
}
 
export default SignUp;