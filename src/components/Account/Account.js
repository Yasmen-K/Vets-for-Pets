/* eslint-disable no-unused-vars */
import SideNav from './SideNav/SideNav'

import AccountInfo from './AccountInfo/AccountInfo'
import {useEffect,useState} from 'react'

import styles from './Account.module.css'



const Account = () => {

    let userUid = 'vqcWIUj9oHaVRtFJ1VFwVe6GgNR2'

    const [userData,setData] = useState([])
    
        // useEffect(() =>{
        //     // db.collection('user').doc(userUid).get()
        //     // .then(res =>{
        //     //     console.log(res.data())
        //     //     setData(res.data())
        //     // })

        //     db.collection('user').doc(userUid).collection('Pets').get()
        //     .then(res =>{
        //         res.forEach(x =>{
                    
        //             setData(x.data())
        //         })
        //     })
        // },[userUid])
     
        console.log(userData)
        return ( 
        <div className={styles['wrapper']}>
            
            <SideNav/>
            <AccountInfo userData = {userUid}/>
        </div>
     );
}
 
export default Account;