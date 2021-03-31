import styles from './OwnerInformation.module.css'


const OwnerInformation = () => {
    return ( 
        <div>
        <form className={styles['main']}>
            <label htmlFor="owner-name"></label>
            <input type="text" id="owner-name" name="owner-name"/>
        </form>

        </div>
     );
}
 
export default OwnerInformation;