
import styles from './Services.module.css'
import useFetch from '../../hooks/useFetch'

const Services = () => {

    const [services] = useFetch(`https://vets-for-pets-80140-default-rtdb.firebaseio.com/Services.json`,[])


    return ( 
        <div className={styles['service-wrapper']}>
            {services.map(x =>
                <div className={styles['service-data']}>
                    <h2>{x.title}</h2>
                    <p>{x.content}</p>
                    <img src={x.img} alt=""/>
                </div>
                )}
        </div>
     );
}
 
export default Services;