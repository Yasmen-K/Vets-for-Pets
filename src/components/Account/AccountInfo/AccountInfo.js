import {db} from '../../../Firebase/auth'
import {useEffect,useState} from 'react'
import styles from './AccountInfo.module.css'

import ChangePetInfo from '../ChangePetInfo/ChangePetInfo'

const AccountInfo = (props) => {
    const [data,setData] = useState([])
    const [state,setState] = useState('')
    const [petChange,setPetChange] = useState('')

    useEffect(() =>{
       
        // let array = []
        // db.collection('user').doc(props.userData).collection('Pets').get()
        // .then(res =>{
            
        //     res.forEach(x =>{
        //         array.push(x.data())
        //     })
        //     setData(array)
        // })

        db.collection('user').doc(props.userData).collection('Pets')
        .onSnapshot(res =>{
            let array = [];

            res.forEach(x =>{
                array.push(x.data())
            })
            setData(array)
        }) 
    },[props.userData])

    const handleChangeInformationButton = (petId,e) =>{
            console.log('hello change',petId)
            console.log(e.target.parentNode)
            setState(petId)
    }

    const resetPetChange = (sentBackData) =>{
                setPetChange(sentBackData)
    }

    
    return ( 
        <div>
            
             {data.map(x =>
                    
                
                    <div key={x.id} className={styles['pets-displayed']}>
                    <h1>{x.petName}</h1>
                    <p>{x.petBreed}</p>
                    <p>{x.petAge}</p>
                    <button onClick={(e) => handleChangeInformationButton(x.id,e)}>Change Information</button>
                     {(state === x.id && !petChange)? <ChangePetInfo petName={x.petName} resetPetChange={resetPetChange}/> : ''} 
                </div>
                )} 

                
                  
        </div>

     );
}
 
export default AccountInfo;