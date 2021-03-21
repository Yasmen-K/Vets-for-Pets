import {useState} from 'react'
import styles from './PetInformation.module.css'


const PetInformation = () => {

    let [ownerName,setOwnerName] = useState(' ');
    
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(ownerName)
    }

    return ( 
        <form onSubmit = {handleSubmit} className={styles['pet-form']}>

            <label htmlFor="pet-name">Pet Name</label>
            <input type="text"/>

            <label htmlFor="pet-age">Pet Age</label>
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
 
export default PetInformation;