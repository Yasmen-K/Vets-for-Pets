import {useState,useEffect} from 'react'
import styles from './Services.module.css'


const Services = () => {

    const [services,setServices] = useState([])

    useEffect(() =>{
        fetch(`https://vets-for-pets-80140-default-rtdb.firebaseio.com/Services.json`)
        .then(res => res.json())
        .then(data =>{
            
           setServices(data)
            
        })
        .catch(err =>{
            console.log(err.message)
        })
    },[])

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