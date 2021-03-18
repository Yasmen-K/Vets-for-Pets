import {useState} from 'react'

import {auth, db } from '../../../../Firebase/auth'
import eventBus from '../../../../EventBus/EventBus'




const LogIn = () => {
    

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [logged,setLogged] = useState('')
    
    
    
    //handleSubmit(e,email,password)
    function handleSubmit(e,email,password){
        e.preventDefault()
        
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            setLogged(true)
            
            // ...
            
            
            
            db.collection('user').doc(user.uid).get()
            .then(doc =>{
                console.log(doc.data())
            })
            .catch(err =>{
                console.log(err.message)
            })
        
            
        })
        .catch((error) => {
            //var errorCode = error.code;
            
            var errorMessage = error.message;
            console.log(errorMessage)
            
        });
    
    }
    
    eventBus.dispatch('handleSubmit',logged)
    
    
    return ( 

        <div>
            <h2>Log In</h2>

            <form onSubmit={(e) => handleSubmit(e,email,password)}>

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