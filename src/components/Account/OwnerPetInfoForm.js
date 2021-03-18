import {useState} from 'react'


const OnewrPetInfoForm = () => {

    let [ownerName,setOwnerName] = useState(' ');
    
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(ownerName)
    }

    return ( 
        <form onSubmit = {handleSubmit}>

            <label htmlFor="owner-name">Owner Name</label>
            <input type="text"  onChange = {(e) => setOwnerName(e.target.value)}/>

            <label htmlFor="pet-name">Pet Name</label>
            <input type="text"/>

            <label htmlFor="pet-type">Pet type</label>
            <select name="pet-type">
                <option>Dog</option>
                <option>Cat</option>
                <option>Bird</option>
                
            </select>

            <label htmlFor="breed">Pet Breed</label>
            <input type="text"/>

            <button>Submit</button>
        </form>

     );
}
 
export default OnewrPetInfoForm;