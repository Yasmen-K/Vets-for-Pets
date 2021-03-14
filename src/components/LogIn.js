import {useState} from 'react'
import {auth} from '../Firebase/auth'


const LogIn = () => {
    

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    
    const handleSubmit = (e) =>{
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
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
        });

    }
    
    
    
    
    
    
    return ( 

        <div>
            <h2>Log In</h2>

            <form onSubmit={handleSubmit}>

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