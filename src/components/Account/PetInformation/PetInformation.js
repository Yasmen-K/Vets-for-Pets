

import PetForm from './PetForm/PetForm'
import {db} from '../../../Firebase/auth'


const PetInformation = () => {

    // let [petName,setPetName] = useState('');
    // let [petAge,setPetAge] = useState('')
    // let [petType,setPetType] = useState('')
    // let [petBreed,setPetBreed] = useState('')
    let userUid = 'vqcWIUj9oHaVRtFJ1VFwVe6GgNR2'
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e.target["pet-type"].value)

        // db.collection('user').doc(userUid).set({
        //     petName:e.target["pet-name"].value,
        //     petAge:e.target["pet-age"].value,
        //     petType:e.target["pet-type"].value,
        //     petBreed:e.target["pet-breed"].value


        // },{merge:true})
        // .then(res =>{
        //     console.log(res)
        // })
        // .catch(err =>{
        //     console.log(err.message)
        // })
        
        // db.collection('user').doc(userUid).collection('Pets').doc('lWcnHqf0beTrPoXzAqC2').get()
        // .then(res =>{
        //     console.log(res.data())
        // })

        db.collection('user').doc(userUid).collection('Pets').doc(e.target['pet-name'].value).set({
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
            <PetForm handleSubmit={handleSubmit}/>
        </div>

     );
}
 
export default PetInformation;