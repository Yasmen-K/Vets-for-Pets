import {useState,useEffect} from 'react'
import {db} from '../Firebase/auth'


    const useCollection = (user,initialValue) =>{

        const [data,setData] = useState(initialValue)
        
    
        useEffect(() =>{
            if (user){
                
                db.collection('user').doc(user).collection('Pets')
            .onSnapshot(res =>{
                let array = [];
    
                res.forEach(x =>{
                    array.push(x.data())
                })
                setData(array)
            })
            }
    
        },[user])
    
        return[
            data,
            
        ]
    
    }



export default useCollection