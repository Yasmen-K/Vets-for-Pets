import styles from './OwnerInformation.module.css'
import SideNav from '../SideNav/SideNav'


const OwnerInformation = () => {
    return ( 
        <div>

        <SideNav/>

        <form className={styles['container']}>
            <div className={styles['main']}>

            <label htmlFor="owner-name">Enter Owner Name</label>
            <input type="text" id="owner-name" name="owner-name"/>

            <label htmlFor="owner-phone">Enter Owner Phone</label>
            <input type="number" name="owner-phone"/>

            <button>Submit</button>
            </div>
        

        <img src="OwnerInfromation.jpg" alt=""/>
        
        </form>
        </div>


        

        
     );
}
 
export default OwnerInformation;