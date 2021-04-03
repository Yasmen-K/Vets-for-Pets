import {db} from '../../../Firebase/auth'



const ChangePetInfo = ({petName,resetPetChange}) => {

    let userUid = 'vqcWIUj9oHaVRtFJ1VFwVe6GgNR2'
    const handleSubmitEvent = (e) =>{
        e.preventDefault()
        db.collection('user').doc(userUid).collection('Pets').doc(petName).set({
            petAge:e.target["pet-age"].value,
            petType:e.target["pet-type"].value,
            petBreed:e.target["pet-breed"].value
        },{merge:true})
        .then(res =>{
            console.log(res)
        })

        resetPetChange(true,true)

    }

    return ( 

        <form onSubmit={handleSubmitEvent}>


        <label htmlFor="pet-age">Pet Age</label>
        <input type="text" name="pet-age"/>

        <label htmlFor="pet-type">Pet type</label>
        <select name="pet-type">
            <option>Dog</option>
            <option>Cat</option>
            <option>Bird</option>
            
        </select>

        <label htmlFor="breed">Pet Breed</label>
        <input type="text" name="pet-breed"/>

        <button>Submit</button>
    </form>
     );
}
 
export default ChangePetInfo;