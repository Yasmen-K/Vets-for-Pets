/* eslint-disable no-unused-vars */
import SideNav from './SideNav/SideNav'

import AccountInfo from './AccountInfo'
import {useState,useEffect} from 'react'
import EventBus from '../../EventBus/EventBus'

import styles from './Account.module.css'

const Account = () => {

    const [user,setUserUid] = useState('')
    
   
        EventBus.on('handleSubmit',(userUid) =>{
        
            setUserUid(userUid)
        })
        
        return ( 
        <div className={styles['wrapper']}>
            
            <SideNav/>
            <AccountInfo user={user}/>
        </div>
     );
}
 
export default Account;