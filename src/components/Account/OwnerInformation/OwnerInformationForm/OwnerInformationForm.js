import styles from './OwnerInformationForm.module.css'

const OwnerInformationForm = () => {
    return ( 

        <div className={styles["main-container"]}>
            

            
            <img src="images/Owner-Infromation.jpg" alt="dog and girl" className={styles["image-container"]}/>

            <form  className={styles["logIn-form"]} >
            <h1 className={styles["login-message"]}>Owner Information</h1>

            <label htmlFor="email">Enter name</label>
            <input 
            type="email"
            name="email"
            
            required
            />


            <label htmlFor="password">Enter phone number</label>
            <input 
            type="password"
            
            name="password"
            required
            />

            <button>Submit</button>

            </form>
           

        </div>

     );
}
 
export default OwnerInformationForm;