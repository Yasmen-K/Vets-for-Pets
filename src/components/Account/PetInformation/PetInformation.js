import PetForm from './PetForm/PetForm'
import {db} from '../../../Firebase/auth'
import SideNav from '../SideNav/SideNav'
import {useContext} from 'react'
import userContext from '../../../contexts/UserContext'


const PetInformation = () => {

    

    const {user} = useContext(userContext)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e.target["pet-type"].value)

            db.collection('user').doc(user).collection('Pets').doc(e.target['pet-name'].value).set({
            petName:e.target["pet-name"].value,
            petAge:e.target["pet-age"].value,
            petType:e.target["pet-type"].value,
            petBreed:e.target["pet-breed"].value
        })
        .then(res =>{
            console.log(res)
        })
        
    }

    return ( 
        <div>
            <SideNav/>
            <PetForm handleSubmit={handleSubmit}/>
        </div>

     );
}
 
export default PetInformation;