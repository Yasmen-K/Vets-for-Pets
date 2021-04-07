
import {useState,useContext} from 'react'
import styles from './AccountInfo.module.css'

import ChangePetInfo from '../ChangePetInfo/ChangePetInfo'
import MakeAnAppointment from '../MakeAnAppointment/MakeAnAppointment'

import useCollection from '../../../hooks/useCollection'

import userContext from '../../../contexts/UserContext'

const AccountInfo = () => {
    
    const [changeButton,setChangeButton] = useState('')
    const [appointmentButton,setAppointmentButton] = useState('')
    const [petChange,setPetChange] = useState('')
    const [makeAnAppointment,setMakeAppointment] = useState('')

    const {user} = useContext(userContext)
    const [accountInfo] = useCollection(user,[])


    

    const handleChangeButtonClick = (petId,e) =>{
            console.log('hello change',petId)
            console.log(e.target.parentNode)
            setChangeButton(petId)
    }

    const handleAppointmentButtonClick =(petId) =>{
            setAppointmentButton(petId)
    }

    const resetPetChange = (changeValue,appointmentValue) =>{
                setPetChange(changeValue)
                setAppointmentButton(appointmentValue)
    }

    const resetMakeAnAppointment = (appointmentValue,changeValue) =>{
        setMakeAppointment(appointmentValue)
        setChangeButton(changeValue)
    }

    
    return ( 
        <div className={styles['main']}>
            
             {accountInfo.map(x =>
                    
                   

                    <div key={x.id} className={styles['pets-displayed']}>
                    <h1>Pet Name:{x.petName}</h1>
                    <p>Pet Breed:{x.petBreed}</p>
                    <p>Pet Age:{x.petAge}</p>
                    <button onClick={(e) => handleChangeButtonClick(x.id,e)}>Change Information</button>
                    <button onClick={(e) => handleAppointmentButtonClick(x.id)}>Make an Appointment</button>
                     {(changeButton === x.id && !petChange && makeAnAppointment) || (changeButton === x.id && !petChange && !makeAnAppointment)? <ChangePetInfo petName={x.petName} resetPetChange={resetPetChange}/> : ''} 
                     {(appointmentButton === x.id && !makeAnAppointment && !petChange)? <MakeAnAppointment petName={x.petName}  resetMakeAnAppointment={resetMakeAnAppointment}/> : ''} 
                </div>
                
                )} 

                
                  
        </div>

     );
}
 
export default AccountInfo;