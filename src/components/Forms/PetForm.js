const PetForm = ({handleSubmit}) => {
    return ( 

        <form onSubmit = {handleSubmit} className={styles['pet-form']}>

            <label htmlFor="pet-name">Pet Name</label>
            <input type="text" name="pet-name"/>

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
 
export default PetForm;