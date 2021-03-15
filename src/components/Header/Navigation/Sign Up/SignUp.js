/* eslint-disable no-undef */
import {auth ,db} from '../../../../Firebase/auth'
import {useState} from 'react'



const SignUp = () => {
 

const [email,setEmail] = useState(' ') 
const [password,setPassword] = useState(' ')
const [username,setUsername] = useState('')

let handleSubmit = (e) =>{
    e.preventDefault()

    auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user.email)

    db.collection('user').doc(user.uid).set({
        
        username,
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
 
}


 
 

    return ( 

        
        <div>

            <h2>Sign Up</h2>






            <form onSubmit = {handleSubmit}>

                <label htmlFor="username">Enter username</label>
                <input
                type="username"
                onChange = {(e) => setUsername(e.target.value)}
                required
                />

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