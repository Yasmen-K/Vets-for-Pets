/* eslint-disable no-unused-vars */


import LogInForm from './LogInForm/LogInForm'
import {useState,useEffect} from 'react'


import {auth} from '../../../../Firebase/auth'
import EventBus from '../../../../EventBus/EventBus'
import {useHistory } from 'react-router-dom'



const LogIn = () => {
    
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [userUid,setUserUid] = useState('')
    
    
    let history = useHistory()
    
    
    
    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target.email.value)
        setEmail(e.target.email.value)
        setPassword(e.target.password.value)
    }
    
    useEffect(() =>{
            auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                
                let userUid= user.uid
                
                setUserUid(user.uid)
                history.push('/account',{userUid})
                
                EventBus.dispatch('handleSubmit',userUid)
                
                
            })
            .catch((error) => {
                //var errorCode = error.code;
                
                var errorMessage = error.message;
                console.log(errorMessage)
                
            });
            
            
        })
            
        
        


    
    
    

    
    return ( 
        
        <div>
           
            <LogInForm handleSubmit={handleSubmit} password={password} email={email}/>
                

           

           
        </div>
     );
}


 
export default LogIn;