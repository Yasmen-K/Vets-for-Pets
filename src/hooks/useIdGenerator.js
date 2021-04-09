import {useState,useEffect} from 'react'



    const useIdGenerator = (content,title,initialValue) =>{

        const [data,setData] = useState(initialValue)
        
    
        useEffect(() =>{
            if(content.length !==0){

                let id = content[2]
                setData(id)
            }
    
        },[content,title])
    
        return[
            data,
            
        ]
    
    }



export default useIdGenerator 