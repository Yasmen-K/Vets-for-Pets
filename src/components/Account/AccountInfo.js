import {db} from '../../Firebase/auth'
import {useState,useEffect} from 'react'



const AccountInfo = ({user}) => {
    
    
   const [userData,setUserData] = useState('')
        
    //  useEffect(() =>{
    //      db.collection('user').doc(user).get()
    //      .then(res =>{
    //          console.log(res.data())
    //          setUserData(res.data)
    //      })
    //  })
    
    console.log(user)


    
    
    return ( 

        <div>
            {!user ? (
                
               <h1>Waiting</h1>
                    ):(

                     <h1>Hello {user}</h1>


                    )


                    }
        </div>
     );
}
 
export default AccountInfo;