import {Link} from 'react-router-dom'
import eventBus from '../../../EventBus/EventBus'
import {useState,useEffect} from 'react'






const Navigation = () => {
    
    const [logged,setLogged] = useState('')
    console.log(logged)
    
    useEffect(() =>{
        
        eventBus.on('handleSubmit',(data) =>{
            setLogged(data)
        })
    })
    
    return ( 
        <div>

            {!logged ? (
                
            <ul>
                <li>
                    <Link to ='/'>Home</Link>
                </li>
                    <li>
                    <Link to="/login">Log In</Link>    
                    </li> 

                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                
            </ul>
            ):(

                <ul>

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