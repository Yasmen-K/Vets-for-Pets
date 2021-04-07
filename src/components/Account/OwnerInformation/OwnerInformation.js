import styles from './OwnerInformation.module.css'
import SideNav from '../SideNav/SideNav'
import OwnerInformationForm from './OwnerInformationForm/OwnerInformationForm'

const OwnerInformation = () => {
    return ( 
        


        <div className={styles['main']}>
            <SideNav/>
           
            <OwnerInformationForm />
                
        </div>
        

        
     );
}
 
export default OwnerInformation;